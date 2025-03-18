FROM nixos/nix:2.25.4

RUN echo "experimental-features = nix-command flakes" >> /etc/nix/nix.conf
RUN nix-channel --update

RUN nix profile install nixpkgs#nodejs nixpkgs#texlive.combined.scheme-full
RUN nix profile install nixpkgs#rustup
RUN nix profile install nixpkgs#clang

RUN rustup install stable
RUN rustup default stable
RUN rustup target add wasm32-unknown-unknown
#RUN rustup component add rust-analyzer

RUN cargo install wasm-bindgen-cli --version 0.2.100 #version should match the one in TOML

RUN mkdir --parents /app/dist
WORKDIR /app

#Rust
COPY Cargo.lock Cargo.toml crates generate.sh .
COPY crates crates

ENV PATH="$PATH:/root/.cargo/bin"
RUN ./generate.sh

#Typescript
COPY static static
COPY tsconfig.json package-lock.json package.json .
COPY html_generator html_generator
RUN npm install
RUN npx tsc
RUN node ts_output/main.js

#Latex
RUN mkdir latex_build
WORKDIR /app/latex_build
COPY resume/resume.tex .
RUN lualatex resume.tex
RUN mv ./resume.pdf ../dist/resume.pdf
WORKDIR /app

#static
COPY ./static/. /app/dist

#Server
RUN nix profile install nixpkgs#python3
EXPOSE 8000

RUN nix profile install nixpkgs#gnused
CMD python3 -m http.server --directory /app/dist

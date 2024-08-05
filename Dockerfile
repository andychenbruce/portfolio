FROM rust:1.79-bookworm

RUN apt update
RUN apt install -y npm
RUN apt install -y ghostscript

RUN rustup target add wasm32-unknown-unknown
RUN rustup component add rust-analyzer

#messes up PATH for login shells
RUN rm /etc/profile

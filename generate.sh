#!/usr/bin/env bash
set -e

echo "COMPILING RUST STUFF"

declare -a NAMES=("icosahedron" "mandelbrot" "maxwell_boltzman_distribution" "schrödinger" "inter_molecular_forces")

for NAME in "${NAMES[@]}"
do
    rm -fr "projects/$NAME/wasm"
done

for NAME in "${NAMES[@]}"
do
    cargo build --release --package "$NAME" --target wasm32-unknown-unknown
done

for NAME in "${NAMES[@]}"
do
    wasm-bindgen --target web "target/wasm32-unknown-unknown/release/$NAME.wasm" --out-dir "dist/projects/$NAME/wasm"
done

echo "DONE"

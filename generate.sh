#!/usr/bin/env bash
set -e

rm -fr ts_output
rm -fr dist
mkdir dist

npx tsc
node ts_output/main.js

cp -r --interactive static/. dist

echo "COMPILING RUST STUFF"

declare -a NAMES=("icosahedron" "mandelbrot")

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

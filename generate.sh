#!/usr/bin/env bash
set -e

rm -fr ts_output
rm -fr dist
mkdir dist

npx tsc
node ts_output/main.js

declare -a NAMES=("icosahedron")

for NAME in "${NAMES[@]}"
do
    rm -fr "projects/$NAME/wasm"
done


cd new_stuff_src

for NAME in "${NAMES[@]}"
do
    cargo build --package "$NAME" --target wasm32-unknown-unknown
done

cd ..

for NAME in "${NAMES[@]}"
do
    wasm-bindgen --target web "target/wasm32-unknown-unknown/debug/$NAME.wasm" --out-dir "static/projects/$NAME/wasm"
done

cp -r --interactive static/. dist

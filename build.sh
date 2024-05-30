#!/usr/bin/env bash
set -e

declare -a NAMES=("icosahedron" "navier_stokes")

for NAME in "${NAMES[@]}"
do
    rm -fr "$NAME/wasm"
done


cd new_stuff_src

for NAME in "${NAMES[@]}"
do
    cargo build --package "$NAME" --target wasm32-unknown-unknown
done

cd ..

for NAME in "${NAMES[@]}"
do
    wasm-bindgen --target web "new_stuff_src/target/wasm32-unknown-unknown/debug/$NAME.wasm" --out-dir "$NAME/wasm"
done

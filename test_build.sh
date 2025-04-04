#!/usr/bin/env bash
set -e
rm -fr dist

cp -r static ./dist

export PATH="$PATH:/root/.cargo/bin"
./generate.sh

npx tsc
node ts_output/main.js

vnu --skip-non-html dist/
vnu --skip-non-css dist/

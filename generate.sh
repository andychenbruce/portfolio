#!/usr/bin/env bash
set -e

rm -fr ts_output
rm -fr dist
mkdir --parents dist

npx tsc
node ts_output/main.js

cp -r --interactive static/. dist

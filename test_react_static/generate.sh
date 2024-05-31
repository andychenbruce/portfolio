#!/usr/bin/env bash
set -e

rm -fr ts_output
rm -fr dist
mkdir dist

npx tsc
node ts_output/pages.js

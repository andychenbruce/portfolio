#!/usr/bin/env bash
set -e

gs -sDEVICE=png256 -r100 -dDownScaleFactor=4 -o GoldenRectangle.png GoldenRectangle.ps 

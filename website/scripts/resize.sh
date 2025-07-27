#!/usr/bin/env bash

set -e

mkdir -p ../img/
cd ../data/img/
magick mogrify -resize "500x400^" -path "../../img" *.png;
cd -
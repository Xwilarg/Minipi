#!/usr/bin/env bash

set -e

echo "Gamejam images"
mkdir -p ../img/gamejam
cd ../data/img/gamejam
magick mogrify -resize "500x400^" -path "../../../img/gamejam/" *.png;
magick mogrify -resize "500x400^" -path "../../../img/gamejam/" *.jpg;
cd -
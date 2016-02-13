#!/usr/bin/env bash

# clean build folder
rm -rf ./build

# compile html
jade ./html --out ./build --hierarchy --pretty

# compile css
lessc ./css/app.less ./build/app.css

# copy files
cp ./CNAME ./build
cp -r ./fonts ./build

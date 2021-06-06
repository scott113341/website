#!/usr/bin/env bash

# All commands must exit 0
set -e

# Clean build folder
rm -rf build/

# Compile html
cp -r html/ build/
rm -r build/blog/drafts/
pug --obj "{ basedir: '$PWD' }" build/
find build/ -type f -name *.pug -delete
find build/ -type f -name *.jade -delete
rm -r build/_templates/

# Compile css
lessc --clean-css css/app.less build/app.css

# Copy static files
cp -r static/* build/

#!/usr/bin/env bash

# all commands must exit 0
set -e

# clean build folder
rm -rf build/

# compile html
cp -r html/ build/
jade build/
find build/ -type f -name *.jade -delete
rm -r build/_templates/ build/blog/drafts/

# compile css
lessc --clean-css css/app.less build/app.css

# copy other files
cp CNAME build/
cp -r favicon/* build/
cp -r fonts/ build/fonts/
cp -r images/ build/images/

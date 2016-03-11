#!/usr/bin/env bash

# all commands must exit 0
set -e

# clean build folder
rm -rf build/

# compile html
jade html/ --out build/

# compile css
lessc --clean-css css/app.less build/app.css

# copy other files
cp CNAME build/
cp -r favicons/* build/
cp -r fonts/ build/fonts/
cp -r images/ build/images/

# How to build

## Install the tools

    npm install -g jade stylus imagemin browserify

## Compile Jade to HTML

    jade src --out build

## Compile Stylus to CSS

    mkdir -p build/css
    stylus src/css --out build/css

## Compile Javascript

    mkdir -p build/js
    browserify src/js/main.js > build/js/main.js

## Copy images

    imagemin src/img/* build/img

## Preview server

    cd build
    python -m SimpleHTTPServer

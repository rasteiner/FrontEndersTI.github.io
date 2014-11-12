# How to build

## Install the tools

    npm install -g jade stylus imagemin browserify
    npm install

## Compile Jade to HTML

    gulp templates

## Compile Stylus to CSS, autoprefix and minify

    gulp styles

## Compile Javascript

    mkdir -p build/js
    browserify src/js/main.js > build/js/main.js

## Copy images

    imagemin src/img/* build/img

## Preview server

    cd build
    python -m SimpleHTTPServer

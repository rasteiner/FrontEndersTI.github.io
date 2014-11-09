# How to build

## Install the tools

    npm install -g jade stylus imagemin

## Compile Jade to HTML

    jade src --out build

## Compile Stylus to CSS

    mkdir -p build/css
    stylus src/css --out build/css

## Copy images

    imagemin src/img/* build/img

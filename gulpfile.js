var gulp = require('gulp');
var jade = require('gulp-jade');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var imagemin = require('gulp-imagemin');

var connect = require('gulp-connect');

var config = {
  templates: {
    src: 'src/**/*.jade',
    dest: 'build'
  },
  styles: {
    src: 'src/css/**/*.styl',
    dest: 'build/css'
  },
  js: {
    src: 'src/js/main.js',
    bundleName: 'main.js',
    dest: 'build/js'
  },
  images: {
    src: 'src/img/**/*.{jpg,jpeg,png,gif}',
    dest: 'build/img'
  },
  connect: {
    root: 'build'
  }
}

gulp.task('templates', function() {
  return gulp
    .src(config.templates.src)
    .pipe(jade())
    .pipe(gulp.dest(config.templates.dest));
});

gulp.task('styles', function() {
  return gulp
    .src(config.styles.src)
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('js', function() {
  return browserify('./' + config.js.src)
    .bundle()
    .pipe(source(config.js.bundleName))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
});

gulp.task('images', function() {
  return gulp
    .src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest))
});

gulp.task('serve', function() {
  connect.server(config.connect);
});


gulp.task('watch', function() {
  gulp.watch(config.templates.src, ['templates']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.js.src, ['js']);
  gulp.watch(config.images.src, ['images']);
});

gulp.task('default', ['templates', 'styles', 'js', 'images', 'serve', 'watch']);

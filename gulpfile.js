var gulp = require('gulp');
var jade = require('gulp-jade');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');


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
  }
}

gulp.task('templates', function() {
  gulp
    .src(config.templates.src)
    .pipe(jade())
    .pipe(gulp.dest(config.templates.dest));
});

gulp.task('styles', function() {
  gulp
    .src(config.styles.src)
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('js', function() {
  browserify('./' + config.js.src)
    .bundle()
    .pipe(source(config.js.bundleName))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest))
});

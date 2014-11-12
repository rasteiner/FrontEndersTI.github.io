var gulp = require('gulp');
var jade = require('gulp-jade');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');


var config = {
  templates: {
    src: 'src/**/*.jade',
    dest: 'build'
  },
  styles: {
    src: 'src/css/**/*.styl',
    dest: 'build/css'
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

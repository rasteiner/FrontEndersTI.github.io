var gulp = require('gulp');
var jade = require('gulp-jade');

var config = {
  templates: {
    src: 'src/**/*.jade',
    dest: 'build'
  }
}

gulp.task('templates', function() {
  gulp
    .src(config.templates.src)
    .pipe(jade())
    .pipe(gulp.dest(config.templates.dest));
});

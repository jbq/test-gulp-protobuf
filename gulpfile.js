var gulp = require('gulp');
var gulpprotobuf = require('gulp-protobufjs');

gulp.task('default', function () {
  return gulp.src('files/organization.proto')
    .pipe(gulpprotobuf())
    .pipe(gulp.dest('out/'));
});

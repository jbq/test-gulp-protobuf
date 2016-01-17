var gulp = require('gulp');
//var gulpprotobuf = require('gulp-protobufjs');
var gulppbjs = require('gulp-pbjs');

gulp.task('default', function () {
  return gulp.src('files/organization.proto')
    //.pipe(gulpprotobuf())
    .pipe(gulppbjs({path:"files",target:"js",source:"proto"}))
    .pipe(gulp.dest('out/'));
});

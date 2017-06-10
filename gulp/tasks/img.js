var gulp = require('gulp');
var config = require('../config').img;

gulp.task('img:prod', ['clean'], function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});


gulp.task('img', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
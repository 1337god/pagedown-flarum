var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('src/js/*')
        .pipe(concat('Markdown.Editor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    gulp.src('src/less/*')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
});
var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
  gulp.src(['./src/html/**/*.html'])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./public'));
});

gulp.task('css', function() {
  gulp.src(['./src/css/**/*.less'])
    .pipe(less())
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  gulp.src(['./src/js/**/*.js'])
    .pipe(concat('application.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['html', 'css', 'js']);

var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');




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

gulp.task('nodemon', function () {
  nodemon({ script: 'index.js', ext: 'html less js' })
    .on('start', ['compile'])
    .on('change', ['compile']);
});




gulp.task('default', ['nodemon']);
gulp.task('compile', ['html', 'css', 'js']);

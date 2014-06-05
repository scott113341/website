var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var markdown = require('gulp-markdown');
var nodemon = require('gulp-nodemon');




gulp.task('html', function() {
  gulp.src(['./src/html/**/*.html'])
    .pipe(plumber())
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./public'));

  // copy angular templates to ./public
  gulp.src(['./src/js/templates/**/*.html'])
    .pipe(plumber())
    .pipe(gulp.dest('./public/templates'));
});

gulp.task('css', function() {
  gulp.src(['./src/css/**/*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public'));

  gulp.src(['./src/fonts/ss-social-regular/webfonts/*'])
    .pipe(plumber())
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  gulp.src([
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './src/js/**/*.js'
    ])
    .pipe(plumber())
    .pipe(concat('application.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'index.js',
    ext: 'html less js',
    ignore: ['./public/**']
  })
    .on('change', ['compile']);
});

gulp.task('markdown', function () {
  return gulp.src('./src/blog/*.md')
    .pipe(plumber())
    .pipe(markdown())
    .pipe(gulp.dest('./public/blog'));
});




gulp.task('default', ['compile', 'nodemon']);
gulp.task('compile', ['html', 'css', 'js', 'markdown']);

var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var ejs = require('gulp-ejs');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var markdown = require('gulp-markdown');
var nodemon = require('gulp-nodemon');


gulp.task('clean', function(cb) {
  del(['build/**/*'], cb);
});


gulp.task('html', function() {
  gulp.src(['./src/html/index.html'])
    .pipe(plumber())
    .pipe(concat('index.html'))
    .pipe(ejs())
    .pipe(gulp.dest('./build'));

  // copy angular templates
  gulp.src(['./src/js/templates/**/*.html'])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(gulp.dest('./build/templates'));
});


gulp.task('css', function() {
  gulp.src(['./src/css/**/*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(less({compress: true}))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./build'));

  // copy ss-social-regular font
  gulp.src(['./src/fonts/ss-social-regular/webfonts/ss-social-regular.*'])
    .pipe(plumber())
    .pipe(gulp.dest('./build/fonts/ss-social-regular'));
});


gulp.task('js', function() {
  gulp.src([
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angulartics/dist/angulartics.min.js',
      './bower_components/angulartics/dist/angulartics-ga.min.js',
      './src/js/**/*.js'
    ])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./build'));
});


gulp.task('markdown', function () {
  gulp.src('./src/blog/*.md')
    .pipe(plumber())
    .pipe(markdown())
    .pipe(gulp.dest('./build/blog'));
});


gulp.task('favicons', function() {
  gulp.src(['./src/favicons/**'])
    .pipe(plumber())
    .pipe(gulp.dest('./build'));
});


gulp.task('nodemon', function () {
  nodemon({
    script: 'devServer.js',
    ext: 'html less js md',
    ignore: ['./build/**']
  })
    .on('change', ['build']);
});


gulp.task('default', ['build', 'nodemon']);
gulp.task('build', ['html', 'css', 'js', 'markdown', 'favicons']);

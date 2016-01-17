var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var ejs = require('gulp-ejs');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var markdown = require('gulp-markdown');
var nodemon = require('gulp-nodemon');

var nodeStatic = require('node-static');
var http = require('http');
var fs = require('fs');


gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    buildHtmlIndex, buildHtmlAngular,
    buildCssLess, buildCssFonts,
    buildJs,
    buildMarkdown, buildFavicons
  )
));
gulp.task(watch);
gulp.task(startServer);
gulp.task('develop', gulp.series(
  'build',
  gulp.parallel(
    startServer,
    watch
  )
));


function clean() {
  return del(['./build']);
}


function buildHtmlIndex() {
  return gulp.src(['./src/html/index.html'])
    .pipe(plumber())
    .pipe(concat('index.html'))
    .pipe(ejs())
    .pipe(gulp.dest('./'));
}


function buildHtmlAngular() {
  return gulp.src(['./src/js/templates/**/*.html'])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(gulp.dest('./build/templates'));
}


function buildCssLess() {
  return gulp.src(['./src/css/**/*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(less({compress: true}))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./build'));
}


function buildCssFonts() {
  return gulp.src(['./src/fonts/ss-social-regular/webfonts/ss-social-regular.*'])
    .pipe(plumber())
    .pipe(gulp.dest('./build/fonts/ss-social-regular'));
}


function buildJs() {
  return gulp.src([
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
}


function buildMarkdown() {
  return gulp.src('./src/blog/*.md')
    .pipe(plumber())
    .pipe(markdown())
    .pipe(gulp.dest('./build/blog'));
}


function buildFavicons() {
  return gulp.src(['./src/favicons/**'])
    .pipe(plumber())
    .pipe(gulp.dest('./build'));
}


function watch() {
  gulp.watch('./src/**/*', gulp.series('build'));
}


function startServer() {
  var server = new nodeStatic.Server('./', { cache: false });
  http.createServer(function(request, response) {
    request.addListener('end', function() {
      server.serve(request, response);
    }).resume();
  }).listen(3000);
}

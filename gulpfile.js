var gulp = require('gulp')
  , del = require('del')
  , plumber = require('gulp-plumber')
  , ejs = require('gulp-ejs')
  , concat = require('gulp-concat')
  , less = require('gulp-less')
  , uglify = require('gulp-uglify')
  , markdown = require('gulp-markdown')
  , nodemon = require('gulp-nodemon');




gulp.task('clean', function(cb) {
  del(['public/**/*'], cb);
});

gulp.task('html', function() {
  gulp.src(['./src/html/index.html'])
    .pipe(plumber())
    .pipe(concat('index.html'))
    .pipe(ejs())
    .pipe(gulp.dest('./public'));

  // copy angular templates
  gulp.src(['./src/js/templates/**/*.html'])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(gulp.dest('./public/templates'));
});

gulp.task('css', function() {
  gulp.src(['./src/css/**/*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(less({compress: true}))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public'));

  // copy ss-social-regular font
  gulp.src(['./src/fonts/ss-social-regular/webfonts/ss-social-regular.*'])
    .pipe(plumber())
    .pipe(gulp.dest('./public/fonts/ss-social-regular'));
});

gulp.task('js', function() {
  gulp.src([
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './src/js/**/*.js'
    ])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('markdown', function () {
  gulp.src('./src/blog/*.md')
    .pipe(plumber())
    .pipe(markdown())
    .pipe(gulp.dest('./public/blog'));
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'index.js',
    ext: 'html less js md',
    ignore: ['./public/**']
  })
    .on('change', ['compile']);
});




gulp.task('default', ['compile', 'nodemon']);
gulp.task('compile', ['clean', 'html', 'css', 'js', 'markdown']);

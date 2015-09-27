var gulp = require('gulp')
var browserSync = require('browser-sync')
var watch = require('gulp-watch')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename')
var cssnext = require("gulp-cssnext");

const cssPattern = 'src/**/*.css'
const jsPattern = 'src/**/*.js'

gulp.task('serve', ['css'], function() {
  browserSync.init({
      server: '.'
  });

  gulp.watch(cssPattern, ['css']);
  gulp.watch(jsPattern).on('change', browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('css', function() {
  return gulp.src('src/main.css')
    .pipe(cssnext({
      'browers': ['last 2 version'],
      'customProperties': true,
      'colorFunction': true,
      'customSelectors': true,
      'sourcemap': true,
      'compress': false
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])

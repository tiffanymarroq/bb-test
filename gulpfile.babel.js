'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
// var rename = require('gulp-rename');
import connect from 'gulp-connect';
var paths = {
  styles: ['./styles/main.css'],
  scripts:['./scripts/main.js'],
  images:['./assets/img/**/*.png', './assets/img/**/*.jpg']
}
var autoprefixerOptions = {
  browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
};

export function connectServer(){
    connect.server({
        root:'dist',
        port: 8000,
        livereload: true
    })
}
export function reload() {
  gulp.src('index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
}

export function styleBundle() {
  return gulp.src('styles/main.css')

    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/styles/'))

}

export function scriptBundle() {
  return gulp.src('./scripts/main.js')
    .pipe(concat('main.min.js'))

    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'));
}

export function watch() {
    gulp.watch(paths.scripts, scriptBundle);
    gulp.watch(paths.styles, styleBundle);
    
  }

  exports.default = watch;


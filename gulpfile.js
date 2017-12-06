'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Compilar los SCSS
gulp.task('scss', function () {
  console.log('scss');
	return gulp.src('./scss/**/*.scss')
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'))
});

// Compilar los SCSS cada vez que haya cambios en los archivos CSS
gulp.task('scss:w', function () {
	gulp.watch('./scss/**/*.scss', ['scss']);
});

// Construir proyecto cada vez que haya cambios en los archivos
gulp.task('proj:w', function () {
	gulp.watch(['./scss/**/*.scss', './pre-js/**/*.js'], ['build']);
});

// "Minificar"(comprimir) los archivos de javascript
gulp.task('compress', function (cb) {
  console.log('compress');
  pump([
        gulp.src('pre-js/*.js'),
        // uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// Revisión de los archivos Javascript
gulp.task('lint', function() {
  console.log('lint');
  return gulp.src('dist/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build', ['compress', 'scss', 'lint'], function(){
	console.log('Build complete');
})

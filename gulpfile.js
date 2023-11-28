const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))

gulp.task('sass', function () {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
})

gulp.task('default', gulp.series('watch'))

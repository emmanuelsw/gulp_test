const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('homunculo',() => {

  gulp.src('./sass/*.sass')
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: true
  }))

  .pipe(autoprefixer({
    versions: ['last 2 browsers']
  }))

  .pipe(gulp.dest('./css'))

});


gulp.task('default', () => {
  gulp.watch('./sass/*.sass', ['homunculo']);
});

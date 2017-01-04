const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('homunculo',() => {
  gulp.src('./sass/*.sass')
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: true
  }))
  .pipe(autoprefixer({
    versions: ['last 2 browsers']
  }))
  pipe(gulp.dest('./css'))
});


gulp.task('pug', () => {
  gulp.src('./pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./html/'))
})


gulp.task('default', () => {
  gulp.watch('./sass/*.sass', ['homunculo']);
  gulp.watch('./pug/**/*.pug', ['pug']);

  browserSync.init({
    server: './html/'
  });

  gulp.watch('./html/*.html').on('change', browserSync.reload)
});

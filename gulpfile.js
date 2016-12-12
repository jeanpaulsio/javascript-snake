var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function() {
  return sass('docs/scss/main.scss')
    .pipe(gulp.dest('docs/css'))
    .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'docs'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'docs'}, reload);
  gulp.watch('docs/scss/*.scss', ['sass']);
});
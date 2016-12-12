var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var concat      = require('gulp-concat')
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function() {
  return sass('docs/scss/main.scss')
    .pipe(gulp.dest('docs/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('scripts', function(){
  return gulp.src('docs/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('docs/js'))
    .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('s', ['sass', 'scripts'], function() {
  browserSync({
    server: {
      baseDir: 'docs'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'docs'}, reload);
  gulp.watch('docs/scss/*.scss', ['sass']);
  gulp.watch('docs/scripts/*.js', ['scripts']);
});
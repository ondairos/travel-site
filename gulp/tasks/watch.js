var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

//watch gulp plugin
gulp.task('watch', function () {

  // initialize broswer sync points to localhost 3000
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function () {
    browserSync.reload(); //reload page
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function () {
   gulp.start('scriptsRefresh'); 
  });

});



// add inject task after styles task for broswersync to inject live css
gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


// create the scripts refresh task with broswersync
gulp.task('scriptsRefresh', ['scripts'], function () {
  browserSync.reload();
});
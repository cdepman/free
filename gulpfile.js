var gulp = require('gulp');
var karma = require('gulp-karma');
var watch = require('gulp-watch');

var testFiles = [
  'client/components/underscore/underscore.js',
  'client/components/angular/angular.js',
  'client/components/angular-mocks/angular-mocks.js',
  'client/components/angular-google-maps/dist/angular-google-maps.min.js',
  'client/components/lodash/dist/lodash.min.js',
  'client/components/angular-ui-router/release/angular-ui-router.min.js',
  'client/components/ngFx/dist/ngFx.min.js',
  'client/app/app.module.js',
  'client/app/core/core.module.js',
  'client/app/*.js',
  'tests/tests.js'
]

gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'my.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      throw err;
    });
});
 
gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'my.conf.js',
      action: 'watch'
    }));
});

// gulp.task('default', function () {
//   gulp.src('css/**/*.css')
//     .pipe(watch('css/**/*.css'))
//     .pipe(gulp.dest('./build/'));
// });
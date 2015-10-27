var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    copy = require('gulp-copy'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    del = require('del'),
    Server = require('karma').Server;
    
var CONNECTION_PORT = 9000;

gulp.task('workflow:dev', ['test', 'connect', 'open'], function() {
  gulp.watch('app/src/**', ['test']);
});

gulp.task('build', ['jshint', 'clean:build'], function() {
  return gulp.src('app/src/**')
    .pipe(gulp.dest('app/build'))
    .pipe(connect.reload());
});

gulp.task('package', ['jshint', 'clean:package'], function() {
  return gulp.src(['app/src/js/**/*.js', '!app/src/js/**/*.spec.js'])
    .pipe(concat('ordinal.js'))
    .pipe(gulp.dest('app/package/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/package/js'));
});

gulp.task('jshint', function() {
  return gulp.src(['app/src/**/*.js', '!app/src/bower_components/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean:package', function() {
    del(['app/package'])
});

gulp.task('clean:build', function() {
    del(['app/build'])
});

gulp.task('test', ['build'], function (done) {
  new Server({
    configFile: __dirname + '/karma-unit.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/build',
    port: CONNECTION_PORT,
    livereload: true
  });
});

gulp.task('open', function () {
  var options = {
    uri: 'http://localhost:' + CONNECTION_PORT
  };
  gulp.src(__filename)
    .pipe(open(options));
});
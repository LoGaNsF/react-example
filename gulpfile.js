var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');

function bundle(bundler) {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

gulp.task('build', function () {
    var bundler = browserify('./app.jsx', {
        debug: true,
        extensions: [".jsx"]
    }).transform(babelify, {
        presets: ["react"]
    });
        
    bundle(bundler);        
});

gulp.task('watch', function () {
    var bundler = watchify(
        browserify('./app.jsx', {
            debug: true,
            extensions: [".jsx"]
        }).transform(babelify, {
            presets: ["react"]
        })
    );
    
    bundle(bundler);

    bundler.on('update', function () {
        bundle(bundler)
    });
});

gulp.task('serve', function () {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['watch', 'serve']);
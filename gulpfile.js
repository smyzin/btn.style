'use strict';

var		gulp 		= require('gulp'),
		pug 		= require('gulp-pug'),
		stylus 		= require('gulp-stylus'),
		myth 		= require('gulp-myth'),
		browserSync = require('browser-sync'),
		reload 		= browserSync.reload,
		livereload 	= require('gulp-livereload'),
		concat 		= require('gulp-concat');

gulp.task('pug', function() {
	return gulp.src('*.pug')
		.pipe(pug({pretty: true}))
		.pipe( gulp.dest('./') )
		.pipe(reload({stream: true}));
});

gulp.task('js', function(event){
	console.log('Running tasks "JS"');
	return gulp.src('assets/js/*.js')
		.pipe(concat('index.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(reload({stream: true}));
});

gulp.task('stylus', function(event){
	console.log('Running tasks "STYLUS"');
	return gulp.src('assets/stylus/mainStyle.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(myth())
		.pipe(gulp.dest('public/css'))
		.pipe(reload({stream: true}));
});

gulp.task('stylusBtn', function(event){
	console.log('Running tasks "STYLUS BTN"');
	return gulp.src('assets/stylus/btnStyle.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(myth())
		.pipe(gulp.dest('public/css'))
		.pipe(reload({stream: true}));
});

gulp.task('reload', reload);

gulp.task('default', function() {

	browserSync.init({
		server: "."
	});

	gulp.watch('assets/stylus/**/*.styl', ['stylus', 'reload']);
	gulp.watch('assets/stylus/**/*.styl', ['stylusBtn', 'reload']);
	gulp.watch('assets/js/*.js', ['js', 'reload']);
	gulp.watch('*.pug', ['pug', 'reload']);

});
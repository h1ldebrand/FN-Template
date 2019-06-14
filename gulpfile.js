'use strict';
global.$ = {
	gulp: require('gulp'),
	scss: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	sourcemaps: require('gulp-sourcemaps'),
	csso: require('gulp-csso'),
	notify: require('gulp-notify'),
	concat: require('gulp-concat'),
	browserSync: require('browser-sync').create(),
	svgmin: require('gulp-svgmin'),
	svgSprite: require('gulp-svg-sprite'),
	replace: require('gulp-replace'),
	cheerio: require('gulp-cheerio'),
	rename: require("gulp-rename"),
	uglify: require('gulp-uglify'),
	pug: require('gulp-pug'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}


$.path.tasks.forEach(function(taskPath){
	require(taskPath)()
})

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('scss', 'pug', 'scripts:libs', 'scripts', 'svg'),
	$.gulp.parallel('watch', 'browser-sync')
));
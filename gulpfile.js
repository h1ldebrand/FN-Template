'use strict';
global.$ = {
    gulp: require('gulp'),
    scss: require('gulp-sass'),
    pug:require('gulp-pug'),
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
    postcss: require('gulp-postcss'),
    rename: require("gulp-rename"),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(function(taskPath){
    require(taskPath)()
})

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('css', 'pug', 'scripts:libs', 'scripts', 'svg'),
	$.gulp.parallel('watch', 'browser-sync')
));
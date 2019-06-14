$.scss.compiler = require('node-sass');

module.exports = function(){
    $.gulp.task('scss', function () {
        return $.gulp.src('src/scss/*.scss')
            .pipe($.sourcemaps.init())
            .pipe($.scss().on('error', $.scss.logError))
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.csso())
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

}
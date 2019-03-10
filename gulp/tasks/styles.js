// $.scss.compiler = require('node-sass');

module.exports = function(){
    $.gulp.task('scss', function () {
        return $.gulp.src('src/scss/*.scss')
            .pipe($.sourcemaps.init())
            .pipe($.scss().on('error', $.scss.logError))
            .pipe($.autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
            }))
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.csso())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('css', function () {
        return $.gulp.src('src/css/*.css')
            .pipe($.sourcemaps.init())
            .pipe($.postcss())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/styles'));
    });



}
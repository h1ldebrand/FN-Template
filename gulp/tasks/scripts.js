
module.exports = function(){
    $.gulp.task('scripts:libs', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
            .pipe($.concat('plugins.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('src/js/main.js')
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}
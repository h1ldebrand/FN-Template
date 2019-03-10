module.exports = function(){
    $.gulp.task('svg', () => {
        return $.gulp.src('src/img/svg-icon/*.svg')
            .pipe($.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parseOptions: { xmlMode : true }
            }))
            .pipe($.replace('&gt;', '>'))
            .pipe($.svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest('build/img/svg'))
    })
}
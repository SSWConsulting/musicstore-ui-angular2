var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildFonts(gulp, plugins, option) {
    return function () {
        return gulp.src(config_1.PATH.src.webconfig)
            .pipe(gulp.dest(path_1.join(config_1.PATH.dest.dev.all)));
    };
};
//# sourceMappingURL=build.webconfig.js.map
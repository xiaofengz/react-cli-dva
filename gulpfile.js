var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    commonPath = require("./build/commonPath");

// 第三方库文件
var thirdFiles = [
    "lib/jquery/jquery.min.js",
];

// 压缩合并第三方库文件，并输出到dist/static目录中
gulp.task("third", function(done) {
    return gulp.src(thirdFiles)
        .pipe(concat("thirds.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(commonPath.src));
});
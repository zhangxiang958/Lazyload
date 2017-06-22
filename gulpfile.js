var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/'));
});
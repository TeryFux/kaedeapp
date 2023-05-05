var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minifyhtml', function() {
	return gulp.src('src/*.html')
	.pipe(htmlmin())
	.pipe(gulp.dest('bin/'));
});

gulp.task('watch', function() {
	gulp.watch('src/*.html', ['minifyhtml']);
});

gulp.task('default', ['minifyhtml', 'watch']);
let gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss');


gulp.task('scss', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('js', function(){
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js'
	])
	.pipe()
});
 
// подключение PostCSS плагинов
gulp.task('css', function() {
  return gulp.src('app/**/*.css')
    .pipe(postcss([
      require('autoprefixer')({}),
      require('cssnano')
    ]))
    .pipe(gulp.dest('dest/main.css'));
});
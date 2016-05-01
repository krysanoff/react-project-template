'use strict'

import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import remember from 'gulp-remember'

export default gulp.task('assets', () => {
	return gulp.src('./app/assets/**/*.*')
		.pipe(newer('./public/assets'))
		.pipe(remember('assets'))
		.pipe(gulp.dest('./public/assets'))
})

'use strict'

import gulp from 'gulp'
import remember from 'gulp-remember'
import path from 'path'

import styles from './styles'
import assets from './assets'

export default gulp.task('watch', () => {

	// function forget(task, filepath) {
	// 	remember.forget(task, path.resolve(filepath))
	// }

	gulp.watch('./app/stylus/**/*.styl', gulp.parallel('styles'))
		.on('unlink', (filepath) => {
			remember.forget('styles', path.resolve(filepath))
		})
	gulp.watch('./app/assets/**/*.*', gulp.parallel('assets'))
		.on('unlink', (filepath) => {
			remember.forget('assets', path.resolve(filepath))
		})

})

'use strict'

import gulp from 'gulp'

import styles from './tasks/styles'
import assets from './tasks/assets'
import wds from './tasks/wds'
import watch from './tasks/watch'

gulp.task('default', gulp.parallel('wds', 'styles', 'assets', 'watch'))


var fs = require('fs')

var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')
var pump = require('pump')



// The order of this build is
//  1.) Collect and concatenate all the JS Files
//  2.) Babel them back to 2015
//  3.) Minify and optimize
//  4.) Store in build/bundle.js
//  
gulp.task('scripts', (cb) => {
    pump([
        gulp.src('./src/js/*.js'),
        concat('bundle.js'),
        babel({presets: ['es2015']}),
        uglify(),
        gulp.dest('./build/')
    ],cb)
})

gulp.task('jade', () => {

})

gulp.task('css', () => {

})


gulp.task('build', ['scripts','css','jade'], () => {

})


var fs = require('fs')

var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')


gulp.task('scripts', () => {
    var files = fs.readdirSync('./src/js')

})

gulp.task('jade', () => {
    var files = fs.readdirSync('./')

})

gulp.task('css', () => {

})


gulp.task('build', ['scripts','css','jade'], () => {

})

var gulp = require('gulp')
var replace = require('gulp-replace')
var version = '1.0.9'
 
gulp.task('default', function () {
  var file_path = ''
  var file_name = ''
  gulp.src(['app/view/**/*.nj', 'app/view/**/**/*.nj'])
    .on('data', function(file) {
      // var name_start = parseInt(file.relative.lastIndexOf('/'))
      // var name_end = parseInt(file.relative.length)
      var path_start = parseInt(file.path.indexOf('app'))
      var path_end = parseInt(file.path.lastIndexOf('/'))
      // var fileName = file.relative.substr(name_start + 1, name_end - name_start)
      var pathName = file.path.substr(path_start, path_end - path_start)
      replaceFile(file.path, pathName)
    })
    // .pipe(gulp.dest('app/public/js'))
})

function replaceFile(path, savePath) {
  gulp.src(path)
    .pipe(replace('?version=1.0.8', '?version=' + version))
    .pipe(gulp.dest(savePath))
}
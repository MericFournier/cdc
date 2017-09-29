//var gulp = require('gulp');
//var gulpif = require('gulp-if');
//var sprity = require('sprity');
//
//
//gulp.task('sprite', function () {
//  return sprity.src({
//    src: '../../app/assets/images/sprite/*.png',
//    style: '../../app/assets/styles/',
//    // ... other optional options 
//    // for example if you want to generate scss instead of css 
//    processor: 'sass', // make sure you have installed sprity-sass 
//     
//     .on('error', function (err) {
//         console.log(err.toString());
//         cb();
//      });
//  })
//  .pipe(gulpif('*.png', gulp.dest('../../build/img/'), gulp.dest('../../build/css/')))
//});
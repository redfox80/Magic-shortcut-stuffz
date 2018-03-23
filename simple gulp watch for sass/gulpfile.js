/**
 * Remember to have installed gulp globally with
 * npm i gulp -g
 * 
 * Also install gulp and gulp-sass locally with
 * npm i gulp --save-dev
 * npm i gulp-sass --save-dev
 */

//------------------------------
//MUST CONFIGURE THESE VARIABLES
//------------------------------


//Rellative or absolute path to sass file
var src = "./assets/sass/master.sass";

//Rellative or absolute path to output destination
var dest = "./redfox80.github.io/css";


//------------------------------
//DON'T GIVE A SHIT ABOUT ANYTHING BELLOW THIS LINE *It's magic*
//------------------------------

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', function() {
    
    gulp.watch(src, ['sass']);

});

gulp.task('sass', function() {

    return gulp.src(src)
        .pipe(sass())
        .pipe(gulp.dest(dest));

});
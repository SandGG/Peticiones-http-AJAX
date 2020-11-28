const  gulp  = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer')
; 

function js () {
    return  browserify('static/scripts/ajax.js')
    .transform(babelify, {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('./'))
    .pipe(gulp.dest('static/dist/main.js'));
}

function css (){
    return gulp.src('static/styles/estilo.scss')
    .pipe(sass( { importer: moduleImporter() } ))
    .pipe(gulp.dest('static/dist'));
}

function watch () {
    gulp.watch('static/scripts/*.js', js); 
    gulp.watch('static/styles/*.scss', css);
}

exports.default = gulp.series(js, css);
exports.watch = watch;		
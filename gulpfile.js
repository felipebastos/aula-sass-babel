const {src, dest, series, watch, parallel} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const sass = require('gulp-dart-sass');

function limpar(){
    return src(['build/js/*.min.js', 'build/css/*.css'])
    .pipe(clean());
}

function js(){
    return src('src/js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('build/js'))
}

exports.default = function(){
    watch('src/js/*.js', series(limpar, js));
}

function css(){
    return src('src/css/*.scss')
    .pipe(sass())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('build/css'))
}


exports.buildjs = series(limpar, js);
exports.clean = limpar;
exports.buildcss = css;
exports.build = parallel(js, css);
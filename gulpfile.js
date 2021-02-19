const {src, dest, series, watch, parallel} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const sass = require('gulp-dart-sass');
const webp = require('gulp-webp');

function limpar(){
    return src(['build/js/*.min.js', 'build/css/*.css', 'build/img/*.webp'])
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
    watch('src/css/*.sass', css);
    watch('src/js/*.js', js);
}

function css(){
    return src('src/css/*.scss')
    .pipe(sass())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('src/css'))
}

function images(){
    return src('src/img/*.jpg')
    .pipe(webp())
    .pipe(dest('build/img'));
}

exports.buildwebp = images;
exports.buildjs = series(limpar, js);
exports.clean = limpar;
exports.buildcss = css;
exports.build = parallel(js, css);
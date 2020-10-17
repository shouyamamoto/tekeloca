var gulp = require('gulp');
var sass = require('gulp-sass');

const { src, dest, watch } = require('gulp');

const task = () => {
    return src('./src/sass/*.scss', {sourcemaps: true})
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('dist/css/', {sourcemaps: true}))
}

const keiryoWatch = () => {
    watch('sass/*.scss', task)
}
exports.keiryoWatch = keiryoWatch;
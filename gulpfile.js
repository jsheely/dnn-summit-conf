const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const seq = require('run-sequence');

gulp.task('clean', () => {
    return gulp.src('./dist').pipe(clean());
});

gulp.task('sass', () => {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/style'))
});

gulp.task('build-typescript', () => {
    return gulp.src('./src/**/*.tsx')
        .pipe(ts({
            declarationFiles: true,
            noResolve: false,
            sourceMap: false,
            jsx: 'react',
        })).js.pipe(gulp.dest('./dist/'))
});

gulp.task('default', (next) => {
    seq('clean', ['sass', 'build-typescript'], next);
});
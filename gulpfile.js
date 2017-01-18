const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const seq = require('run-sequence');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

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

// gulp.task('browserify', browserify([{
//     entries: './src/js/main.tsx',
//     dest: './dist'
// }]));
gulp.task('browserify', () => {

    return browserify({
            debug: true,
            entries: './src/js/main.tsx'
        })
        .plugin(tsify)
        .transform('browserify-shim')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', (next) => {
    seq('clean', ['sass', 'browserify'], next);
});
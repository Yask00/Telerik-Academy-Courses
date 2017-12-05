const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);

// LINTERS 
const eslint = require('gulp-eslint');

gulp.task('test', () => { // gulp test
    console.log('i am the test task');
});

gulp.task('default', () => { // gulp 
    console.log('i am the default task');
});

gulp.task('default', () => { // gulp 
    return gulp.src('package.json')
        .pipe(
            gulp.dest('result/')
        );
});


// LINT
gulp.task('lint:js', () => { // gulp lint:js
    return gulp.src(['src/**/*.js', '!node_module/**s'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// CLEAN
const del = require('del');

gulp.task('clean', () => {
    return del('build');
});

// COMPILE
const babel = require('gulp-babel');

gulp.task('compile:js', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(
            gulp.dest('build')
        );
});
gulp.task('compile:styl', () => {

});


gulp.task('lint', ['lint:js', 'lint:ts', 'lint:styl']);
gulp.task('compile', ['compile:js', 'compile:styl']);

gulp.task('build', gulpsync.sync(['clean', 'lint', 'compile']));

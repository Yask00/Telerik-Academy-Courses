const gulp = require ('gulp');

const stylus = require('gulp-stylus');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

const mocha = require('gulp-mocha');

gulp.task('clean', () =>{
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('compile:stylus', () => {
    return gulp.src('./app/styl/**/*.styl')
    //styl files
        .pipe(stylus())
        //temp css files
        .pipe(gulp.dest('./build/css'));
});

gulp.task('compile:es2017', () => {
    return gulp.src('./app/es2017/**/*.js')
    //styl files
        .pipe(babel({
            presets: ['es2017']
        }))
        //temp css files
        .pipe(gulp.dest('./build/es2017'));
});

// multiple task compiled
// better use gulp-sync
gulp.task('compile',
    ['clean'],
    () => {
        ['compile:es2017', 'comppile:stylus']
        .forEach((task) => gulp.start(task));
});

// Unit testing
gulp.task('test:unit', () =>{
    gulp.src('./test/unit/**/*.js')
        .pipe(mocha({
            reporter: 'nyan'
        }));
});

gulp.task('test', ['test:unit']);

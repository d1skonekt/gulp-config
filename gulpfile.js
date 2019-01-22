const autoprefixer = require('autoprefixer');
const browser = require('browser-sync');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const  del = require('del');
const gulp = require('gulp');
const html = require('gulp-htmlmin');
const image = require('gulp-image');
const mmq = require('gulp-merge-media-queries');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourceMap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const svgmin = require('gulp-svgmin');
const babel = require('gulp-babel');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const gulpif = require('gulp-if');

let {
  argv
} = require('yargs');

if (argv.production) {
  process.env.NODE_ENV = 'production';
}

if (argv.development) {
  process.env.NODE_ENV = 'development';
}

//Enter syntax sass or scss
let syntax = 'scss';

let path = {
  css: {
    dev: './dev/' + syntax + '/main.' + syntax,
    public: './public/css/',
    build: './build/css/',
    watcher: './dev/' + syntax + './**/*.' + syntax
  },
  js: {

  },
  html: {
    dev: './dev/*.html',
    public: './public/',
    build: './build/'
  }
};

//CSS TASKS

//CSS task with source maps
function devCSS() {
  return gulp.src('./dev/scss/main.scss')
    .pipe( sourceMap.init() )
    .pipe( sass( {outputStyle: 'compressed'} ).on( 'error', sass.logError ) )
    .pipe( mmq( {log: true} ) )
    .pipe( postcss( [autoprefixer, cssnano] ) )
    // .pipe( gulp.dest( './public/' ) )
    .pipe( browser.reload({stream: true}) )
    .pipe( sourceMap.write() )
    .pipe( gulp.dest( 'public/css/' ) );
}

//CSS task without source maps
function buildCSS() {
  return gulp.src( './dev/scss/main.scss' )
    .pipe( sass( {outputStyle: 'compressed'} ).on( 'error', sass.logError ) )
    .pipe( mmq( {log: true} ) )
    .pipe( postcss( [autoprefixer, cssnano] ) )
    .pipe( gulp.dest( './build/css/' ) );
}

//JS task with source maps
function devJS() {
  console.log('devJS');
  return gulp.src('dev/js/index.js')
  .pipe(webpack(require('./webpack.config.js'), compiler, function(err, stats) {
    /* Use stats to do more things if needed */
  }))
  .pipe(gulpif(process.env.NODE_ENV === "production", gulp.dest('./build/js/')))
  .pipe(gulpif(process.env.NODE_ENV === "development", gulp.dest('./public/js/')))
}

//Optimize images
function optimizeImages() {
  return gulp.src( path.images.dev )
    .pipe( image() )
    .pipe( gulp.dest( path.images.public ) );
}

//Optimize svg
function optimizeSVG() {
  return gulp.src( path.svg.dev )
    .pipe( svgmin() )
    .pipe( gulp.dest( path.svg.public ) );
}

//Copy fonts in public folder
function font() {
  return gulp.src( './' )
    .pipe( gulp.dest( path.fonts.public ) );
}

//HTML minification for public folder
function htmlMin() {
  return gulp.src( './dev/index.html' )
    .pipe( html() )
    .pipe( gulp.dest('./build/' ) );
}

//Before new build clean public folder
function clean() {
  return del( ['./build/'] );
}
function copyHTML() {
 return gulp.src('./dev/index.html').pipe(gulp.dest('./public/'));
}

function watch() {
  gulp.watch( './dev/scss/*.scss', devCSS );
  gulp.watch( './dev/js/*.js', gulp.parallel(devJS, browser.reload));
}
function watchHTML() {
  gulp.watch( './public/', browser.reload );
}

function browserSync() {
  browser.init({
    server: "./public/"
  });

  gulp.watch( './dev/index.html' ).on("change", gulp.parallel(copyHTML, watchHTML));

}

let build = gulp.series( clean, gulp.parallel( buildCSS, devJS, htmlMin ) );
let beforeServer = gulp.parallel(copyHTML, devCSS, devJS);
let dev = gulp.series( beforeServer, gulp.parallel( browserSync, watch ));

//exports['name task for call in cli'] = nameFunctionTask
exports.styles = devCSS;
exports.optimizeImages = optimizeImages;
exports.optimizeSVG = optimizeSVG;
exports.clean = clean;
exports.watch = watch;
exports.build = build;
exports.js = devJS;

exports.default = dev;
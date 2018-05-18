/* eslint-env  node:true */

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var watch = require("gulp-watch");


gulp.task("default", function() {
	gulp.watch("scss/**/*.scss", gulp.series("styles"));
});

gulp.task("styles", function() {
	return gulp.src("scss/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
			cascade: false
		}))
		.pipe(gulp.dest("./css"));
});


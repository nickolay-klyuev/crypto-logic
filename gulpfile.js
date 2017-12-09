"use strict";

const gulp = require("gulp");
const del = require("del");
const newer = require("gulp-newer");


gulp.task("to_public", function () {
	return gulp.src("dev/**")
		.pipe(newer("public"))
		.pipe(gulp.dest("public"));
});

gulp.task("clean", function () {
	return del("public");
});

gulp.task("build", ["clean", "to_public"]);
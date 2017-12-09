"use strict";

const gulp = require("gulp");
const del = require("del");
const newer = require("gulp-newer");
const connect = require('gulp-connect');


gulp.task("to_public", function () {
	return gulp.src("dev/**")
		.pipe(newer("public"))
		.pipe(gulp.dest("public"))
		.pipe(connect.reload());
});

gulp.task("clean", function () {
	return del("public");
});

gulp.task("build", ["clean", "to_public"]);

gulp.task("connect", function() {
	connect.server({
		root: "public",
		livereload: true
	});
});

gulp.task("start", ["build", "connect", "watch"]);

gulp.task("watch", function () {
	gulp.watch(["dev/**"], ['build']);
});
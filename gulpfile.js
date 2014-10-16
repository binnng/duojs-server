var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var exec = require("child-exec");
var join = require("path").join;
var root = __dirname;

var paths = {
  styles: "scripts",
  scripts: "styles",
  build: "build"
};

gulp.task("server", function() {
  exec("node --harmony bin/server");
});

gulp.task("build", ["clean"], function() {
  exec("node --harmony bin/build");
});

gulp.task("clean", function() {
  gulp.src(paths.build)
    .pipe($.clean());
});

gulp.task("dist", function() {

});

gulp.task("publish", function() {
  exec("node --harmony bin/publish");
});

gulp.task("default", ["build"]);
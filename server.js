var exec = require("child-exec");
var markdown = require("markdown").markdown;
var write = require("write");
var fs = require("fs");
var path = require("path");
var join = path.join;
var root = __dirname;

var index = join(root, "index.html");

write.sync(index, (function() {
  var md = join(root, "README.md");
  var html = join(root, "template/index.html");
  var template = fs.readFileSync(html, "utf8");
  var text = fs.readFileSync(md, "utf8");

  return template.replace("{markdown}", markdown.toHTML(text));
}()));

exec("gulp server");
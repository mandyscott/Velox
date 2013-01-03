var db = require('./database');
var fs = require('fs');
var ui = require('./ui');

function add(response) {
  console.log("Request handler 'add' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  db.add(response);
}

function css(response, pathname) {
  console.log("Request handler for CSS files was called.");
  //TODO MUST check this URL for injection attacks!
  fs.readFile(__dirname + pathname, function (err, data) {
  if (err) console.log(err);
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.write(data);
    response.end();
  });
}

function edit(response) {
  console.log("Request handler 'edit' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  db.edit(response);
}

function error404(response) {
  response.writeHead(404, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  response.write("<div>404 Not found</div>");
  response.write(ui.htmlEnd());
  response.end();
}

function home(response) {
  console.log("Request handler 'home' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  response.write("<div>Welcome to Velox</div>");
  response.write(ui.htmlEnd());
  response.end();
}

function image(response, pathname) {
  console.log("Request handler for JavaScript files was called.");
  //TODO MUST check this URL for injection attacks!
  fs.readFile(__dirname + pathname, function (err, data) {
  if (err) console.log(err);
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(data);
    response.end();
  });
}

function js(response, pathname) {
  console.log("Request handler for JavaScript files was called.");
  //TODO MUST check this URL for injection attacks!
  fs.readFile(__dirname + pathname, function (err, data) {
  if (err) console.log(err);
    response.writeHead(200, {'Content-Type': 'text/javascript'});
    response.write(data);
    response.end();
  });
}

function list(response) {
  console.log("Request handler 'list' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  db.list(response);
}

function read(response) {
  console.log("Request handler 'read' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  db.read(response);
}

function remove(response) {
  console.log("Request handler 'remove' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  db.remove(response);
}

exports.add = add;
exports.css = css;
exports.edit = edit;
exports.error404 = error404;
exports.home = home;
exports.image = image;
exports.js = js;
exports.list = list;
exports.read = read;
exports.remove = remove;

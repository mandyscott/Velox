var db = require('./database');
var ui = require('./ui');

function add(response) {
  console.log("Request handler 'add' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(ui.htmlStart());
  response.write(ui.menu());
  db.add(response);
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
exports.edit = edit;
exports.error404 = error404;
exports.home = home;
exports.list = list;
exports.read = read;
exports.remove = remove;

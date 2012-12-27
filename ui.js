function htmlEnd() {
  var html = "</body></html>";
  return html;
}

function htmlStart() {
  var html = "<html><head></head><body>";
  return html;
}

function menu() {
  var menu = '<ul class="menu">';
  menu += '<li><a href="/">Home</a></li>';
  menu += '<li><a href="/add">Add</a></li>';
  menu += '<li><a href="/list">List</a></li>';
  menu += '<li><a href="/edit">Edit</a></li>';
  menu += '<li><a href="/remove">Remove</a></li>';
  menu += '</ul>';
  return menu
}

exports.htmlEnd = htmlEnd;
exports.htmlStart = htmlStart;
exports.menu = menu;

function htmlEnd() {
  var html = ''
  html += '</div><!-- /container -->';
  html += '<script src="lib/jquery-ui-1.9.2.custom/js/jquery-1.8.3.js"></script>';
  html += '<script src="lib/bootstrap/js/bootstrap.min.js"></script>';
  html += "</body></html>";
  return html;
}

function htmlStart() {
  var html = '<!DOCTYPE html>';
  html += '<html lang="en">';
  html += '<head>';
  html += '<title>Velox</title>';
  html += '<link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">';
  html += '<link href="lib/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">';
  html += '<link href="lib/bootstrap/css/bootswatch.css" rel="stylesheet" media="screen">';
  html += '</head>';
  html += '<body>';
  html += '<div class="navbar navbar-fixed-top">';
  html += '<div class="navbar-inner">';
  html += '<div class="container">';
  html += '<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">';
  html += '<span class="icon-bar"></span>';
  html += '<span class="icon-bar"></span>';
  html += '<span class="icon-bar"></span>';
  html += '</a>';
  html += '<a class="brand" href="../">Velox</a>';
  html += '<div class="nav-collapse" id="main-menu">';
  html += '<ul class="nav" id="main-menu-left">';
  html += '<li><a class="active" href="/">Home</a></li>';
  html += '<li><a href="/add">Add</a></li>';
  html += '<li><a href="/list">List</a></li>';
  html += '<li><a href="/edit">Edit</a></li>';
  html += '<li><a href="/remove">Remove</a></li>';
  html += '</ul>';
  html += '</div><!-- nav-collapse -->';
  html += '</div><!-- /container -->';
  html += '</div><!-- /navbar-inner -->';
  html += '</div><!-- /navbar navbar-fixed-top -->';
  html += '<div class="container">';
  return html;
}

function menu() {
  var html = '';
  html += '<header class="jumbotron subhead">';
  html += '<div class="subnav">';
  html += '<ul class="nav nav-pills">';
  html += '<li><a class="active" href="/">Home</a></li>';
  html += '<li><a href="/add">Add</a></li>';
  html += '<li><a href="/list">List</a></li>';
  html += '<li><a href="/edit">Edit</a></li>';
  html += '<li><a href="/remove">Remove</a></li>';
  html += '</ul>';
  html += '</div><!-- /subnav -->';
  html += '</header><!-- /jumbotron subhead -->';
  return html
}

exports.htmlEnd = htmlEnd;
exports.htmlStart = htmlStart;
exports.menu = menu;

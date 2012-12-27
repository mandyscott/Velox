//inspect
//until debug

function route(handle, pathname, response) {
  console.log('Routing request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    handle['/error404'](response);
  }
}

exports.route = route;

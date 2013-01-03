//inspect
//until debug

function route(handle, pathname, response) {
  console.log('Routing request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else if(pathname.indexOf('.css') != -1){
    handle['/css'](response, pathname);
  } else if(pathname.indexOf('.png') != -1){
    handle['/image'](response, pathname);
  } else if(pathname.indexOf('.js') != -1){
    handle['/js'](response, pathname);
  } else {
    console.log("No request handler found for " + pathname);
    handle['/error404'](response);
  }
}

exports.route = route;

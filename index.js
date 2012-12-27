var server = require("./server");
var router = require("./router");
var handler = require("./handler");

var handle = {}
handle["/"] = handler.home;
handle["/add"] = handler.add;
handle["/edit"] = handler.edit;
handle["/error404"] = handler.error404;
handle["/home"] = handler.home;
handle["/list"] = handler.list;
handle["/read"] = handler.read;
handle["/remove"] = handler.remove;

server.start(router.route, handle);

var db = require('mongodb').MongoClient;
var querystring = require("querystring")
var ui = require("./ui");;

function add(response) {
  _connect(function(collection){
    collection.insert({'title':'Another Story', 'created':new Date()}, {safe:true}, function(err, result) {
      if (!err) {
        response.write("<div>Added successfully.</div>");
      } else {  
        response.write('<div>An error occured when inserting data into the database.</div>');
      }
      list(response);
    });
  });
}

function edit(response) {
  list(response);
}

//private to the database module
function _connect(onSuccess) {
  // connect to the db
  db.connect('mongodb://localhost:27017/velox', function(err, db) {
    if(!err) {
      console.log('We are connected to the DB');
      var collection = db.collection('backlog');
      onSuccess(collection);
    } else {
      response.write('<div class="error">There was a problem connecting to the database.</div>');
      response.write(ui.htmlEnd());
      response.end();
    }
  });
}

function list(response) {
  _connect(function(collection){
    collection.find().toArray(function(err, items) {
      if (!err) {
        var body = '';
        if (items.length <= 0) {
          response.write('<div>No stories found.</div>');
        } else {
          body += '<ul>';
          for (var i = 0; i < items.length; i++) {
            body += '<li>' + items[i].title + '</li>';
          }
          body += '</ul>';
          response.write(body);
        }
        response.write(ui.htmlEnd());
        response.end();
      }
    });
  });
}

function read(response) {
  list(response);
}

function remove(response) {
  list(response);
}

exports.add = add;
exports.edit = edit;
exports.list = list;
exports.read = read;
exports.remove = remove;

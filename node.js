const fs = require('fs');
function lfid(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error(err);
      return;
    } 
    files.forEach(file => {
      console.log(file);
    });
  });
}

function readAsync(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
readAsync('./index.html', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  fs.readFile('index.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

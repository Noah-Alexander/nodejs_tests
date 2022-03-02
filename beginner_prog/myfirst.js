var http = require('http');
var url = require('url');
var dt = require('./myfirstmodule');
var fs = require('fs'); //allows communication with filesystem

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  //#0 hello world
  //res.end('Hello World');

  //#1 modules
  res.write("The date and time are currently: " + dt.myDateTime());
  
  //#2 reading data from client
  // res.write(req.url);
  // res.end();

  //#3 reading unique data from client url
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  // res.end(txt);

  //#4 reading from files in pc
  // fs.readFile('demofile1.html', function(err, data) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   return res.end();
  // });

  fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.end("goodbye");
}).listen(8080);
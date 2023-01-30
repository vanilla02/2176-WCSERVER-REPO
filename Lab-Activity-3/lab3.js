var http = require('http');
var server = http.createServer(function (req, res) {
  var name = "John Smith";  // Default name

  // Extract the name from the URL query string
  if (req.url.indexOf("?name=") !== -1) {
    name = req.url.split("?name=")[1];
  }

  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p><b>Welcome to my Node.js Application</b></p></body></html>');
    res.end(`Welcome ${name}. This is an activity about basics of Node.js`);
  }

  else if (req.url == "/about") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p><b>This is the About Page</b></p></body></html>');
    res.end(`Hello ${name}. This activity will teach on how to deal with a simple server and local modules in Node.js`);
  }

  else if (req.url == "/contact") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p><b>This is the Contact Page</b></p></body></html>');
    res.end(`${name}, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials`);
  }

  else if (req.url == "/gallery") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p><b>This is a Gallery Page.</b></p></body></html>');
    res.end();
  }

  else if (req.url == "/(root)") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p><b>Welcome to my Node.js Application</b></p></body></html>');
    res.end(`Welcome ${name}. This is an activity about basics of Node.js`);
  }

  else res.end('Invalid Request');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')
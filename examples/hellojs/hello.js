const http = require('http');
const os = require('os');
console.log('test server starting...');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(`host name is ${os.hostname}`); //end the response
}).listen(8080); //the server object listens on port 8080
const http = require('http');

//  Create server takes a callback that has two parameters (req, res)
//    req = incoming request
//    res = response, what we're sending back
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page.');
  } else if (req.url === '/about') {
    res.end('Here is our history');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <a href="/">Back to home</a>
      `);
  }
});

//  When we create a server, we need to identify what port our server will listen to
//  Web servers will continue to listen to requests
server.listen(5000);

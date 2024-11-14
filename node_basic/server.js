const http = require("http");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.statusCode = 200;
  res.end("SERVER STARTED");
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "127.0.1.1";

server.listen(port, host, () => {
  console.log(`Server started 'http://${host}:${port}`);
});

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to Home </h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1> Checkouts our Products </h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1> Like / Share / Subscribe </h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`SERVER Running on address http://localost:${PORT}`);
});

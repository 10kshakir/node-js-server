const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {

      if (req.url == "/") {
            fs.readFile("./files/index.html", "utf-8", function (error, data) {

                  if (error) {
                        res.writeHead(404)
                        res.end("<h1>404 not found</h1>");
                  } else {

                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.write(data);

                        res.end();
                  }
            });
      } else if (req.url == "/about") {
            fs.readFile("./files/about.html", "utf-8", function (error, data) {

                  if (error) {
                        res.writeHead(404)
                        res.end("<h1>404 not found</h1>");
                  } else {

                        res.writeHead(200, {"Content-Type": "text/html"});
                        res.write(data);

                        res.end();
                  }
            });

      } else {

            fs.readFile("./files/404.html", "utf-8", function (error, data) {


                  res.writeHead(404);
                  res.write(data);

                  res.end();

            });
      }
});

server.listen(3000, function () {
      console.log("server run succesfully on 3000 port");
});

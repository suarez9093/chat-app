const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http").createServer(app);
const path = require("path");
// Initilize an instance of socket.io by passing the http (the HTTP server) obj
const io = require("socket.io")(http);

// Middleware
// Use to serve images, CSS files and JS files in a dir named public. If removed CSS file will not be loaded into the html
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/:name", (req, res, next) => {
  let options = {
    root: path.join(__dirname, "public/views"),
  };
  let filename = req.params.name;
  res.sendFile(filename, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent: ", filename);
    }
  });
});
app.get("/chat", function (req, res) {
  // Sending a file when hitting the / route. __dirname is the current directory
  res.sendFile(__dirname + "/public/views/chat.html");
});

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));

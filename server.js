const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http").createServer(app);

const chat = require("./routes/chat");
const home = require("./routes/home");
// Initilize an instance of socket.io by passing the http (the HTTP server) obj
const io = require("socket.io")(http);

// Middleware
// Use to serve images, CSS files and JS files in a dir named public. If removed CSS file will not be loaded into the html
app.use(express.static("public"));
// When the / routes is hit use the routes found in home
app.use("/", home);
// When the /chat route is hit use the routes in chat
app.use("/chat", chat);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));

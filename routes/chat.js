const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

router.use(express.static("../public"));

router.get("/", function (req, res) {
  // Sending a file when hitting the / route. __dirname is the current directory
  res.sendFile(path.join(__dirname, "../public/views", "chat.html"));
});

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });

//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
// });

module.exports = router;

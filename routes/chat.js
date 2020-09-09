const express = require("express");
const router = express.Router();

router.use(express.static("public"));

router.get("/", function (req, res) {
  // Sending a file when hitting the / route. __dirname is the current directory
  res.sendFile(__dirname + "../public/views/chat.html");
});

module.exports = router;

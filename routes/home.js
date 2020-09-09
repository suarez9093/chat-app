const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
// const public = require("../public");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views", "index.html"));
});

// router.get("/:name", (req, res, next) => {
//   let options = {
//     root: path.join(__dirname, "../public/views"),
//   };
//   let filename = req.params.name;
//   res.sendFile(filename, options, (err) => {
//     if (err) {
//       next(err);
//     } else {
//       console.log("Sent: ", filename);
//     }
//   });
// });

module.exports = router;

const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("You made a request");
  console.log(req.body);
});

module.exports = router;

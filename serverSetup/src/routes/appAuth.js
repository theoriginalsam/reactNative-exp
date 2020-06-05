const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("You mad a request");
  console.log(req.body);
});

module.exports = router;

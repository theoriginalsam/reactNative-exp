const express = require("express");

const app = express();

app.get("./", (req, res) => {
  res.send("Express called");
});

app.listen(3000, () => {
  console.log("Listennig on port");
});

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/appAuth");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(router);

const mongoUri =
  "mongodb+srv://samir:samir@cluster0-sj8rp.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected");
});
mongoose.connection.on("error", () => {
  console.log("Error");
});
app.get("./", (req, res) => {
  res.send("Express called");
});

app.listen(3000, () => {
  console.log("Listennig on port");
});

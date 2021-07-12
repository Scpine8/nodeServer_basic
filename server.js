const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

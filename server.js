const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;

app.use(cors());
app.use(bodyParser());

let data = {
    info: "Hello World!",
    names: {
        "Sean": 10,
        "Bob": 5,
        "Steve": 5,
    }
}

app.get("/", (req, res) => {
    res.send(data.info);
});

app.get("/names", (req, res) => {
        res.send(data.names);
    });

app.post("/", (req, res) => {
    let { user, pass } = req.body;

    if (user == 'hayden' && pass == 'boshart') {
        res.send("You're In")
    }

    res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

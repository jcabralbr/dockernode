const express = require("express");

const PORT = 3010;
const HOST = "0.0.0.0";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World ok");
});

app.listen(PORT, HOST);
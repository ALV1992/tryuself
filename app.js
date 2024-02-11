const express = require('express');
const app = express();

app.use("/assets", express.static(__dirname + "/public_html/assets"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public_html/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public_html/about.html");
});

app.use((req, res) => {
    res.sendFile(__dirname + "/public_html/page_not_found.html");
});

app.listen(8080);
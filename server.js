const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const students = ["Ariell"];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/students", (req, res) => {
    res.status(200).send(students);
});

const port= process.env.PORT || 4545;

app.listen(port, () => {
    console.log(`Jammin on ${port}`);
});
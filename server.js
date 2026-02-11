const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

//Get all tasks 
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
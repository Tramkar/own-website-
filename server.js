const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

//Get all tasks 
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

//cors
const express = require('express');
app.use(cors());

//post new task
app.post("/tasks", (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});

//delete task 
app.delete("/tasks/:id", (req, res) => {
    const id = req.params.id;
    tasks = tasks.filter(task => task.id !== id);
    res.json({ message: "Task deleted" });
});

app.listen(3000, () => console.log("API running "));

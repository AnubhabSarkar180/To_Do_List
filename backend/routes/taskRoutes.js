//Crud operations Rest api

const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

//showing all tasks
router.get("/", async(req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

//Adding and saving a new task
router.post("/", async(req,res) => {
    const {title , description} = req.body();
    if(!title)
        return res.status(400).json({message:"Title not found"});

try{  
    const newTask = new Task ({title , description});
    const savedTask = await newTask.save();
    res.status(200).json({message:"Task added successfully", savedTask});
}

catch(err){
    console.error(error);
    res.status(404).json({message:"Error adding task"});
}
});

//onCompleting task

router.put("/:id", async(res,req) => {
    const {id} = req.params;
    try{
   const updatedTask = await Task.findByIdAndUpdate(id ,{ title , description, isCompleted: true}, {new: true});
   res.status(200).json({message: "Task updated successfully"});
    }
   catch(err){
    console.error("Task failed to be updated", err);
    res.status(404).json({message:"Task failed to be updated"});
   }
})

//delete tasks


module.exports = router
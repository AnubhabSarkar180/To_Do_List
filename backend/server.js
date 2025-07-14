//imp modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
//MiddleWare 
app.use(cors());

app.use(express.json());

//mongoose connect

mongoose.connect(uri)
    .then(() => {
        console.log("MongoDb is connected");
    })
    .catch((err) => {
        console.log(err);
    });


//CRUD functions

const TaskRouter = require("../routes/taskRoutes.js");
app.use("/api/tasks",taskRouter);
//Listen function
app.listen(3000,() => { 
    console.log("Server is running on port 3000");
})
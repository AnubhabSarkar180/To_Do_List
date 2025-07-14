// Schema of task --> model of task --> add task

const taskSchema = mongoose.Schema(
    {
        title : {type:String , require: true},
        description: {type: String},
        isCompleted: {type:Boolean , default: false},
    }
);

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;
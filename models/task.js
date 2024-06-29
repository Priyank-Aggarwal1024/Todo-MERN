const mongoose = require("mongoose");
const { Schema } = mongoose;
const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Task field is required"],
        unique: true
    },
    status: {
        type: Boolean,
        required: [true, "Status field is required"],
    },
    date: { type: Date, default: Date.now }
})
const Task = mongoose.model("Task", taskSchema);
exports.Task = Task;
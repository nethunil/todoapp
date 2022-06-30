const mongoose = require('mongoose')

const todoList = mongoose.model(
    "todoList", 
    new mongoose.Schema(
        {
            title: {
                type: String,
                required: true,
            },
            desc: {
                type: String,
            },
        },
        {timestamps : true}
    )
);

module.exports = todoList;
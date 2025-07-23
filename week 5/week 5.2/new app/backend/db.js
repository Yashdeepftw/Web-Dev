/*
    Todo {
        title: string,
        description: string,
        completed: boolean
    }
*/


const mongo = require("mongoose");
mongo.connect('mongodb+srv://admin:uxMK2yOtC6oMzM6a@cluster0.3urzi.mongodb.net/');
const todoSchema = mongo.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongo.model('todos', todoSchema);

module.exports ={
    todo
}
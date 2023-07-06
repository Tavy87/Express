// controllers/todos.js

module.exports = {
    index,
    show,
    new: newTodo,
    create
};

// Convention is to name the model in uppercase and singular
const Todo = require("../models/todo");

function index(req, res) {
    res.render("todos/index", {
        todos: Todo.getAll(),
        title: "All To-Dos"
    });
}

function show(req, res) {
    res.render("todos/show", {
        todo: Todo.getOne(req.params.id),
        title: "To-Do Details"
    });
}

function newTodo(req, res) {
    res.render("todos/new", {title: "New Todo"});
}

function create(req,res) {
    // this will show us what is inside req object
    console.log(req.body);
    // The model is responsible for creating data
    Todo.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect("/todos");
}
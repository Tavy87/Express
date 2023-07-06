var express = require("express");
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require("../controllers/todos");
const todos = require("../controllers/todos");

// All actual paths start with "/todos"

// GET /todos
router.get("/", todosCtrl.index);
// GET /todos/new
router.get("/new", todosCtrl.new);
// GET /todos/:id
router.get("/:id", todosCtrl.show);
module.exports = router;
// POST /todos
router.post("/", todosCtrl.create);

module.exports = router;
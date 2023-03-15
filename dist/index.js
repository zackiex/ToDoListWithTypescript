"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDoItem = exports.updateToDoList = exports.createNewTODoList = void 0;
const express_1 = __importDefault(require("express"));
const Todo_1 = require("./classes/Todo");
let taskOne = new Todo_1.Todo(1, "Zakaria", "123456789", 1, "App mit Typescripte", "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.", "03.03.2023", "18.02.2023", "Categorie 3");
let taskTwo = new Todo_1.Todo(2, "User 2", "qwertzuiopü", 1, "App mit NodeJs", "An essay planner template assists you with the help of providing easy-to-understand guidelines for writing an essay. These guidelines will help you map the content of the essay so you can get a kick start. There are a lot of ways these templates can be used, such as making notes of the main information such as numeric data, hyperlinks, and additional articles to include. These can be added as a reference within your I see and will help you as evidence to your main argument.", "04.04.2023", "01.01.2023", "Categorie 2");
let taskThree = new Todo_1.Todo(3, "User 3", "987654321", 1, "App mit Javascripte", "This will reduce the confusion in including data as you would know exactly what to add and what not to add. This will make the process very quick as well. The time constraint will be low because there won't be any kind of need for additional research as you will have all the things prepared before actually writing the essay.", "13.03.2023", "28.02.2023", "Categorie 3");
let toDoList = new Array();
toDoList.push(taskOne, taskTwo, taskThree);
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/api/toDoList', (req, res) => {
    if (!res) {
        return "The data is empty!";
    }
    else
        res.json(toDoList);
});
function createNewTODoList() {
    app.post('/api/toDoList', (req, res) => {
        const newToDoListCreated = req.body;
        toDoList.push(newToDoListCreated);
        //const createdToDO =  newToDoListCreated;
        res.json(newToDoListCreated);
    });
}
exports.createNewTODoList = createNewTODoList;
;
function updateToDoList() {
    app.put('/api/toDoList/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const UpdatedToDoList = req.body;
        toDoList[id] = UpdatedToDoList;
        res.json(UpdatedToDoList);
    });
}
exports.updateToDoList = updateToDoList;
;
function deleteToDoItem() {
    app.delete('/api/toDoList/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const deletedToDoList = toDoList.splice(id, 1);
        res.json(deletedToDoList);
    });
}
exports.deleteToDoItem = deleteToDoItem;
;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
exports.default = app;

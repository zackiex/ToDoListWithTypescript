//import express, {Express, Request, Response} from "express";
import {Todo} from "./classes/Todo";
import {User} from "./classes/User";

// let taskOne = new Todo(1, "Zakaria", "123456789", 1, "App mit Typescripte", "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.", "03.03.2023", "18.02.2023", "Categorie 3");
// let taskTwo = new Todo(2, "User 2", "qwertzuiopü", 1, "App mit NodeJs", "An essay planner template assists you with the help of providing easy-to-understand guidelines for writing an essay. These guidelines will help you map the content of the essay so you can get a kick start. There are a lot of ways these templates can be used, such as making notes of the main information such as numeric data, hyperlinks, and additional articles to include. These can be added as a reference within your I see and will help you as evidence to your main argument.", "04.04.2023", "01.01.2023", "Categorie 2");
// let taskThree = new Todo(3, "User 3", "987654321", 1, "App mit Javascripte", "This will reduce the confusion in including data as you would know exactly what to add and what not to add. This will make the process very quick as well. The time constraint will be low because there won't be any kind of need for additional research as you will have all the things prepared before actually writing the essay.", "13.03.2023", "28.02.2023", "Categorie 3");

// let toDoList = new Array();
const deadLineToDo1 = new Date(2023, 4, 1);
const created_atToDo1 = new Date(2022, 3, 8);
const deadLineToDo2 = new Date(2025, 10, 18);
const created_atToDo2 = new Date(2021, 8, 25);
const deadLineToDo3 = new Date(2023, 12, 12);
const created_atToDo3 = new Date(2023, 1, 1);
console.log("Welcome to the App \n");

console.log("-----Inserting a new users-----");
const user0 = new User("Zoubir", []);
const user = new User("Zakaria", []);
const user2 = new User("Abdel Alhamid", []);
const user3 = new User("Zaki", []);
console.log(user, user2, user3);
console.log("-----Printed all of users-----\n");

console.log("-----Inserting a new to do-list-----");
const todo = new Todo([user0], "App mit Typescripte", "Description....", deadLineToDo1, created_atToDo1, "Categorie 1", false);
const todo2 = new Todo([user0], "App mit Java Spring Boot", "Description....", deadLineToDo2, created_atToDo2, "Categorie 4", false);
const todo3 = new Todo([user0], "Testing the App", "Description....", deadLineToDo3, created_atToDo3, "Categorie 11", false);
console.log("----------List 1----------------\n");
todo.displayList(todo2);
console.log("----------List 2----------------\n");
todo.displayList(todo3);
console.log("----------List 3----------------\n");
console.log(todo.displayList(todo));
console.log("--------------------------\n");


console.log("-----Assign a to-do list to a specific user-----");
user.todos = [todo3, todo];
user2.todos = [todo3, todo];
user3.todos = [todo3, todo, todo2];
console.log(user, user2, user3);
console.log("-----List ist printed-----");

console.log("--------------------------\n");
console.log("-----Update a list of users to do a task-----");
todo.setUsersToDoATask([], todo);
console.log(todo);

//const user2 = new User("AbdelHamid", [todo, todo]);

//toDoList.push(taskOne, taskTwo, taskThree);

// const app: Express = express();
// const port = process.env.PORT || 3000;
//
// app.use(express.json());
//
//
// app.get('/api/toDoList', (req: Request, res: Response) => {
//     if (!res) {
//         return "The data is empty!";
//     } else
//         res.json(toDoList);
// });
//
// export function createNewTODoList() {
//     app.post('/api/toDoList', (req: Request, res: Response) => {
//         const newToDoListCreated = req.body;
//         toDoList.push(newToDoListCreated);
//         //const createdToDO =  newToDoListCreated;
//         res.json(newToDoListCreated);
//     });
//
// };
//
// export function updateToDoList() {
//     app.put('/api/toDoList/:id', (req: Request, res: Response) => {
//         const id: number = parseInt(req.params.id);
//         const UpdatedToDoList = req.body;
//         toDoList[id] = UpdatedToDoList;
//         res.json(UpdatedToDoList);
//     });
// };
//
// export function deleteToDoItem() {
//     app.delete('/api/toDoList/:id', (req: Request, res: Response) => {
//         const id: number = parseInt(req.params.id);
//         const deletedToDoList = toDoList.splice(id, 1);
//         res.json(deletedToDoList);
//     });
//
// };
// app.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });
// export default app;

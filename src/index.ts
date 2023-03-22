//import express, {Express, Request, Response} from "express";
import {User} from "./classes/User";

// create a deadlines and create date
const deadLineToDo1 = new Date(2023, 4, 1);
const created_atToDo1 = new Date(2022, 3, 8);
const deadLineToDo2 = new Date(2025, 10, 18);
const created_atToDo2 = new Date(2021, 8, 25);
const deadLineToDo3 = new Date(2023, 12, 12);
const created_atToDo3 = new Date(2023, 1, 1);

console.log("Welcome to the TO DO App \n");
const user1 = new User('John');
const user2 = new User('Jane');

const todoList1 = user1.createTodoList('Shopping List');
const todoList2 = user2.createTodoList('Work Tasks');

const todoItem1 = todoList1.createTodoItem('Buy milk', deadLineToDo1, created_atToDo1, "C1");
const todoItem2 = todoList1.createTodoItem('Buy bread', deadLineToDo2, created_atToDo2, "C1");

const todoItem3 = todoList2.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
const todoItem4 = todoList2.createTodoItem('Send email to boss', deadLineToDo1, created_atToDo1, "C3");

console.log(user1.todoLists); // [todoList1]
console.log(todoList1.todoItem); // [todoItem1, todoItem2]

todoItem1.updateDescription('Buy almond milk');
console.log(todoItem1.description); // 'Buy almond milk'

todoItem3.completeItem();
console.log(todoItem3.completeItem()); // true

user1.deleteTodoList(todoList1);
console.log(user1.todoLists); // []

// const user = new User("Zakaria", []);
// user.addTodoList("Make TypeScript App");
// user.todos[0].addItem("TypeScript", "Description of the project", deadLineToDo1, created_atToDo1, "C1", false);
// user.todos[1].addItem("TypeScript", "Description of the project", deadLineToDo1, created_atToDo1, "C1", false);
// console.log(user.todos[0].name);
// console.log(user.todos[0].todoList);

/*
//user.addTodoToList(todoList, "Buy milk", "descriptiom", deadLineToDo1, created_atToDo1, "C1", false);

console.log("-----Initialize user /Create Users/-----\n");
const user0 = new User("", []);
const user1 = new User("Zakaria", []);
const user2 = new User("Abdel Alhamid", []);
const user3 = new User("Zaki", []);
let arrayOfUsers = new Array();
arrayOfUsers.push(user0, user1, user2, user3);
checkUserAndTasks(arrayOfUsers);
console.log("-----All users are printed-----\n");

console.log("-----Creat a to-do-list-----\n");
const todo0 = new TodoItem([user0], "App mit Typescripte", "Description....", deadLineToDo1, created_atToDo1, "Categorie 1", false);
const todo1 = new TodoItem([user0], "App mit Java Spring Boot", "Description....", deadLineToDo2, created_atToDo2, "Categorie 4", false);
const todo2 = new TodoItem([user0], "Testing the App", "Description....", deadLineToDo3, created_atToDo3, "Categorie 11", false);
let arrayOfToDo = new Array();
arrayOfToDo.push(todo0, todo1, todo2);
for (let iList: number = 0; iList <= 3; iList++) {
    console.log(arrayOfToDo[iList]);
}
console.log("------------To-do list has been created--------------\n");

console.log("-----Assign a to-do list to a specific user-----\n");
user1.todos = [todo0];
user2.todos = [todo0, todo1];
user3.todos = [todo1, todo2, todo0];
let arrayOfToDoWithUsers = new Array();
arrayOfToDoWithUsers.push(user1, user2, user3);
checkUserAndTasks(arrayOfToDoWithUsers);
console.log("-----List are printed-----\n");

console.log("-----Update a list of users to do a task-----");
console.log("The previous to-do-list to " + user1.username + " war:\n");
console.log(user1.todos);
user1.todos = [todo0, todo1, todo2];
console.log("The new to-do-list to " + user1.username + " will be : \n");
console.log(user1.todos);
console.log("-----******* Updated successfully *******-----\n");

console.log("-----********** Update elements in a To-Do-List **********-----\n");
console.log("The list bevor the update !\n");
console.log(todo1);
console.log("The list after the update !\n");
todo1.setTitle("New Title");
todo1.setDescription("*******New Description*******");
todo1.setMarkAsDone(true);
console.log(todo1);
console.log("-----******* Updated successfully *******-----\n");

console.log("-----********** Update user info **********-----\n");
console.log("The user bevor the update \n" + user1.getUserName());
user1.setUserName("New Name :)");
console.log("The user after the update ! \n" + user1.getUserName());
console.log("-----******* Updated successfully *******-----\n");

//todo1.setUsersToDoATask([], todo1);
//console.log(todo1);

//const user2 = new User("AbdelHamid", [todo, todo]);
//toDoList.push(taskOne, taskTwo, taskThree);

// let taskOne = new TodoItem(1, "Zakaria", "123456789", 1, "App mit Typescripte", "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.", "03.03.2023", "18.02.2023", "Categorie 3");
// let taskTwo = new TodoItem(2, "User 2", "qwertzuiopü", 1, "App mit NodeJs", "An essay planner template assists you with the help of providing easy-to-understand guidelines for writing an essay. These guidelines will help you map the content of the essay so you can get a kick start. There are a lot of ways these templates can be used, such as making notes of the main information such as numeric data, hyperlinks, and additional articles to include. These can be added as a reference within your I see and will help you as evidence to your main argument.", "04.04.2023", "01.01.2023", "Categorie 2");
// let taskThree = new TodoItem(3, "User 3", "987654321", 1, "App mit Javascripte", "This will reduce the confusion in including data as you would know exactly what to add and what not to add. This will make the process very quick as well. The time constraint will be low because there won't be any kind of need for additional research as you will have all the things prepared before actually writing the essay.", "13.03.2023", "28.02.2023", "Categorie 3");
// let toDoList = new Array();

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
// export default app;*/

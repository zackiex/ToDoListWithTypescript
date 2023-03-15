//import express, {Express, Request, Response} from "express";
import {Todo} from "./classes/Todo";

// let taskOne = new Todo(1, "Zakaria", "123456789", 1, "App mit Typescripte", "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.", "03.03.2023", "18.02.2023", "Categorie 3");
// let taskTwo = new Todo(2, "User 2", "qwertzuiopü", 1, "App mit NodeJs", "An essay planner template assists you with the help of providing easy-to-understand guidelines for writing an essay. These guidelines will help you map the content of the essay so you can get a kick start. There are a lot of ways these templates can be used, such as making notes of the main information such as numeric data, hyperlinks, and additional articles to include. These can be added as a reference within your I see and will help you as evidence to your main argument.", "04.04.2023", "01.01.2023", "Categorie 2");

let toDoList = new Array();

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

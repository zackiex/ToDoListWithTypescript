"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const User_1 = require("./User");
class Todo extends User_1.User {
    constructor(userId, username, password, id, title, description, deadline, created_at, category, complete = false, updated_at) {
        super(userId, username, password);
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.created_at = created_at;
        this.category = category;
        this.complete = complete;
        this.updated_at = updated_at;
    }
    displayList() {
        return `The Title of this task is :${this.title} \n` +
            `You have to do the following : ${this.description} \n` +
            `The task was created on : ${this.created_at}  and supposed to be completed on ${this.deadline} \n` +
            `This task was updated on : ${this.updated_at} \n` +
            `Task completed : ${this.complete} \n` +
            `This task was created by : ${this.username} \n`;
    }
    setTitle(newTitle) {
        return this.title = newTitle;
    }
    getTitleTask() {
        return `${this.title}`;
    }
    getDescription() {
        return `${this.description}`;
    }
    setDescription(newDescription) {
        return this.description = newDescription;
    }
    setDeadline(newDeadline) {
        return this.deadline = newDeadline;
    }
    setEmploye(name) {
        return this.username = name;
    }
    markAsDone(isTaskCompleted) {
        return isTaskCompleted;
    }
    removeTask(taskName) {
    }
}
exports.Todo = Todo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(users, title, description, deadline, created_at, category, complete = false, updated_at) {
        this.users = users;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.created_at = created_at;
        this.category = category;
        this.complete = complete;
        this.updated_at = updated_at;
    }
    displayList(todo) {
        return `The Title of this task is :${this.title} \n` +
            `You have to do the following : ${this.description} \n` +
            `The task was created on : ${this.created_at}  and supposed to be completed on ${this.deadline} \n` +
            `This task was updated on : ${this.updated_at} \n`;
    }
    /*setUsersToDoATask(newUser: User[], todo: Todo[], oldUser: User[]) {
        if (newUser.length == 0) {
            this.users = new Array<User>();
            console.log("List of new users is empty !")
        } else if (todo.length == 0) {
            this.users = new Array<User>();
            console.log("List of To-Do is empty !")
        }
        if (oldUser.length == 0) {
            this.users = new Array<User>();
            console.log("List of old users is empty !")
        } else {
        this.users = newUser;
        }
            //  else if (this.title == title) {
            //     console.log("No changes !");
        // }
    }*/
    setTitle(newTitle) {
        this.title = newTitle;
    }
    getTitleTask() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
    setDeadline(newDeadline) {
        this.deadline = newDeadline;
    }
    setMarkAsDone(isTaskCompleted) {
        this.complete = isTaskCompleted;
    }
}
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map
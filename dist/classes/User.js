"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const TodoList_1 = require("./TodoList");
class User {
    constructor(username) {
        this._username = username;
        this._todoLists = [];
    }
    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }
    get todoLists() {
        return this._todoLists;
    }
    set todoLists(todoList) {
        this._todoLists = todoList;
    }
    createTodoList(title) {
        const newTodoList = new TodoList_1.TodoList(title);
        this._todoLists.push(newTodoList);
        return newTodoList;
    }
    deleteTodoList(todoList) {
        const index = this._todoLists.indexOf(todoList);
        if (index > -1) {
            this._todoLists.splice(index, 1);
        }
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map
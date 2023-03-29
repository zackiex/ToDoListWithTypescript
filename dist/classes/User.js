"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username) {
        this._todoLists = [];
        this._username = username;
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
    deleteTodoList(todoList) {
        const index = this.todoLists.indexOf(todoList);
        if (index !== -1) {
            this.todoLists.splice(index, 1);
        }
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoList {
    constructor(listName) {
        this._listName = listName;
        this._todoItems = [];
    }
    get listName() {
        return this._listName;
    }
    set listName(name) {
        this._listName = name;
    }
    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }
    get todoItem() {
        return this._todoItems;
    }
    set todoItem(todoItem) {
        this._todoItems = todoItem;
    }
    createTodoItem(description, deadLine, createdAt, category) {
        const newTodoItem = new TodoItem_1.TodoItem(description, deadLine, createdAt, category);
        this._todoItems.push(newTodoItem);
        return newTodoItem;
    }
    createUser(user) {
        this._user = user;
        user._todoLists.push(this);
    }
    deleteTodoItem(todoItem) {
        const index = this._todoItems.indexOf(todoItem);
        if (index > -1) {
            this._todoItems.splice(index, 1);
        }
    }
}
exports.TodoList = TodoList;
//# sourceMappingURL=TodoList.js.map
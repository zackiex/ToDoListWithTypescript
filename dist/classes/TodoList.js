"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
class TodoList {
    constructor(listName, user) {
        this._todoItems = [];
        this._listName = listName;
        //1 User
        this._user = user;
        //to N TodoLists
        user._todoLists.push(this);
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
    get todoItems() {
        return this._todoItems;
    }
    set todoItems(todoItem) {
        this._todoItems = todoItem;
    }
    deleteTodoItem(todoItem) {
        const index = this.todoItems.indexOf(todoItem);
        if (index !== -1) {
            this.todoItems.splice(index, 1);
        }
    }
}
exports.TodoList = TodoList;
//# sourceMappingURL=TodoList.js.map
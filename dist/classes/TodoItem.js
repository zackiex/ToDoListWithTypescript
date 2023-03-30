"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(description, /*deadLine: Date, createdAt: Date, category: string,*/ todoList) {
        // private _isCompleted: boolean;
        // private _deadLine: Date;
        // private _created_at: Date;
        // private _category: string;
        this._todoLists = [];
        this._description = description;
        // this._isCompleted = false;
        // this._category = category;
        // this._created_at = createdAt;
        // this._deadLine = deadLine;
        // this._todoLists = []
        //Many TodoItems
        todoList.todoItems.push(this);
        //to Many TodoLists
        this._todoLists.push(todoList);
    }
    get todoLists() {
        return this._todoLists;
    }
    set todoLists(value) {
        this._todoLists = value;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    addTodoList(todoList) {
        //Many TodoItems
        todoList.todoItems.push(this);
        //to Many TodoLists
        this._todoLists.push(todoList);
    }
    updateTodoList(todoList) {
        this._todoLists.push(todoList);
    }
    deleteTodoList(todoList) {
        const index = this._todoLists.indexOf(todoList);
        if (index !== -1) {
            this._todoLists.splice(index, 1);
        }
    }
}
exports.TodoItem = TodoItem;
//# sourceMappingURL=TodoItem.js.map
import {TodoList} from "./TodoList";

export class TodoItem {
    private _description: string;
    // private _isCompleted: boolean;
    // private _deadLine: Date;
    // private _created_at: Date;
    // private _category: string;
    private _todoLists: TodoList[] = [];

    constructor(description: string, /*deadLine: Date, createdAt: Date, category: string,*/ todoList: TodoList) {
        this._description = description;
        // this._isCompleted = false;
        // this._category = category;
        // this._created_at = createdAt;
        // this._deadLine = deadLine;
        // this._todoLists = []

        //Many TodoItems
        todoList.todoItems.push(this)
        //to Many TodoLists
        this._todoLists.push(todoList)
    }

    // For API for Fixing JSON Circular References.
    toJSON() {
        return {
            description: this._description,
        };
    }

    get todoLists(): TodoList[] {
        return this._todoLists;
    }

    set todoLists(value: TodoList[]) {
        this._todoLists = value;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    addTodoList(todoList: TodoList) {
        //Many TodoItems
        todoList.todoItems.push(this)
        //to Many TodoLists
        this._todoLists.push(todoList)
    }

    updateTodoList(todoList: TodoList) {
        this._todoLists.push(todoList)
    }

    public deleteTodoList(todoList: TodoList): void {
        const index = this._todoLists.indexOf(todoList);
        if (index !== -1) {
            this._todoLists.splice(index, 1);
            const itemIndex = todoList.todoItems.indexOf(this);
            if (itemIndex !== -1) {
                todoList.todoItems.splice(itemIndex, 1);
            }
        }
    }
}
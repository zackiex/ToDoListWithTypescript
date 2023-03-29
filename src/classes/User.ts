import {TodoList} from "./TodoList";

export class User {
    private _username: string;
    _todoLists: TodoList[] = [];

    constructor(username: string) {
        this._username = username;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get todoLists(): TodoList[] {
        return this._todoLists;
    }

    set todoLists(todoList: TodoList[]) {
        this._todoLists = todoList;
    }

    public deleteTodoList(todoList: TodoList): void {
        const index = this.todoLists.indexOf(todoList);
        if (index !== -1) {
            this.todoLists.splice(index, 1);
        }
    }
}
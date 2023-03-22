import {TodoList} from "./TodoList";

export class User {
    private _username: string;
    _todoLists: TodoList[];

    constructor(username: string) {
        this._username = username;
        this._todoLists = [];
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

    createTodoList(title: string) {
        const newTodoList = new TodoList(title);
        this._todoLists.push(newTodoList);
        return newTodoList;
    }

    deleteTodoList(todoList: TodoList) {
        const index = this._todoLists.indexOf(todoList);
        if (index > -1) {
            this._todoLists.splice(index, 1);
        }
    }

    // addTodoList(name: string) {
    //     const todo = new TodoList([], name);
    //     this._todos.push(todo);
    // }
}
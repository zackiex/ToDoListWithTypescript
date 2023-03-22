import {TodoItem} from "./TodoItem";
import {User} from "./User";

export class TodoList {
    private _listName: string;
    private _user: User | undefined;
    private _todoItems: TodoItem[];

    constructor(listName: string) {
        this._listName = listName;
        this._todoItems = [];
    }

    get listName(): string {
        return this._listName;
    }

    set listName(name: string) {
        this._listName = name;
    }

    get user(): User | undefined {
        return this._user;
    }

    set user(user: User | undefined) {
        this._user = user;
    }

    get todoItem(): TodoItem[] {
        return this._todoItems;
    }

    set todoItem(todoItem: TodoItem[]) {
        this._todoItems = todoItem;
    }

    createUser(user: User) {
        this._user = user;
        user._todoLists.push(this);
    }

    createTodoItem(description: string, deadLine: Date, createdAt: Date, category: string) {
        const newTodoItem = new TodoItem(description, deadLine, createdAt, category);
        this._todoItems.push(newTodoItem);
        return newTodoItem;
    }

    // deleteTodoItem(todoItem: TodoItem) {
    //     const index = this._todoItems.indexOf(todoItem);
    //     if (index > -1) {
    //         this._todoItems.splice(index, 1);
    //     }
    // }
}
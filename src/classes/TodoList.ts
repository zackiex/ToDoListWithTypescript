import {TodoItem} from "./TodoItem";
import {User} from "./User";

export class TodoList {
    private _listName: string;
    private _user: User;
    private _todoItems: TodoItem[] = [];

    constructor(listName: string, user: User) {
        this._listName = listName;

        //1 User
        this._user = user
        //to N TodoLists
        user._todoLists.push(this)
    }

    get listName(): string {
        return this._listName;
    }

    set listName(name: string) {
        this._listName = name;
    }

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

    get todoItems(): TodoItem[] {
        return this._todoItems;
    }

    set todoItems(todoItem: TodoItem[]) {
        this._todoItems = todoItem;
    }

    // createTodoItem(description: string, deadLine: Date, createdAt: Date, category: string) {
    //     const newTodoItem = new TodoItem(description, deadLine, createdAt, category);
    //     this._todoItems.push(newTodoItem);
    //     return newTodoItem;
    // }
    //
    // createUser(user: User) {
    //     this._user = user;
    //     user._todoLists.push(this);
    // }
    //
    // deleteTodoItem(todoItem: TodoItem) {
    //     const index = this._todoItems.indexOf(todoItem);
    //     if (index > -1) {
    //         this._todoItems.splice(index, 1);
    //     }
    // }
}
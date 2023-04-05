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

   // For API for Fixing JSON Circular References.
    toJSON() {
        return {
            listName: this._listName,
            todoItems: this._todoItems
        };
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

    public deleteTodoItem(todoItem: TodoItem): void {
        const index = this.todoItems.indexOf(todoItem);
        if (index !== -1) {
            this.todoItems.splice(index, 1);
        }
        //TODO: both way delete
        todoItem.todoLists = [];
    }

}
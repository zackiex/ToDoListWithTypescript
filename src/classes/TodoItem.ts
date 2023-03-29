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
    // get deadLine(): Date {
    //     return this._deadLine;
    // }
    //
    // set deadLine(deadline: Date) {
    //     this._deadLine = deadline;
    // }
    //
    // get createdDate(): Date {
    //     return this._created_at;
    // }
    //
    // set createdDate(crd: Date) {
    //     this._created_at = crd;
    // }
    //
    // get category(): string {
    //     return this._category;
    // }
    //
    // set category(c: string) {
    //     this._category = c;
    // }
    //
    // get comptedTask(): boolean {
    //     return this._isCompleted;
    // }
    //
    // completeItem() {
    //     this._isCompleted = true;
    // }


    public deleteTodoList(todoList: TodoList): void {
        const index = this._todoLists.indexOf(todoList);
        if (index !== -1) {
            this._todoLists.splice(index, 1);
        }
    }
}
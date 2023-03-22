export class TodoItem {
    private _description: string;
    private _isCompleted: boolean;
    private _deadLine: Date;
    private _created_at: Date;
    private _category: string;

    constructor(description: string, deadLine: Date, createdAt: Date, category: string) {
        this._description = description;
        this._isCompleted = false;
        this._category = category;
        this._created_at = createdAt;
        this._deadLine = deadLine;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get deadLine(): Date {
        return this._deadLine;
    }

    set deadLine(deadline: Date) {
        this._deadLine = deadline;
    }

    get createdDate(): Date {
        return this._created_at;
    }

    set createdDate(crd: Date) {
        this._created_at = crd;
    }

    get category(): string {
        return this._category;
    }

    set category(c: string) {
        this._category = c;
    }

    get comptedTask(): boolean {
        return this._isCompleted;
    }

    uncompleteItem() {
        this._isCompleted = false;
    }

    updateDescription(newDescription: string) {
        this._description = newDescription;
    }

    completeItem() {
        this._isCompleted = true;
    }


    /*
    displayList(todo: TodoItem): string {
        return `The Title of this task is :${this.title} \n` +
            `You have to do the following : ${this.description} \n` +
            `The task was created on : ${this.created_at}  and supposed to be completed on ${this.deadline} \n` +
            `This task was updated on : ${this.updated_at} \n`;
    }
*/
    /*setUsersToDoATask(newUser: User[], todo: TodoItem[], oldUser: User[]) {
        if (newUser.length == 0) {
            this.users = new Array<User>();
            console.log("List of new users is empty !")
        } else if (todo.length == 0) {
            this.users = new Array<User>();
            console.log("List of To-Do is empty !")
        }
        if (oldUser.length == 0) {
            this.users = new Array<User>();
            console.log("List of old users is empty !")
        } else {
        this.users = newUser;
        }
            //  else if (this.title == title) {
            //     console.log("No changes !");
        // }
    }*/
}
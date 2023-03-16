import {User} from "./User";

export class Todo {
    constructor(
        public users: User[],
        public title: string,
        public description: string,
        public deadline: Date,
        public created_at: Date,
        public category: string,
        public complete: boolean = false,
        public readonly updated_at?: string,
    ) {
    }

    displayList(todo: Todo): string {
        return `The Title of this task is :${this.title} \n` +
            `You have to do the following : ${this.description} \n` +
            `The task was created on : ${this.created_at}  and supposed to be completed on ${this.deadline} \n` +
            `This task was updated on : ${this.updated_at} \n`;
    }

    /*setUsersToDoATask(newUser: User[], todo: Todo[], oldUser: User[]) {
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

    setTitle(newTitle: string) {
        this.title = newTitle;
    }

    getTitleTask(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(newDescription: string) {
        this.description = newDescription;
    }

    setDeadline(newDeadline: Date) {
        this.deadline = newDeadline;
    }

    setMarkAsDone(isTaskCompleted: boolean) {
        this.complete = isTaskCompleted;
    }

}
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

    setUsersToDoATask(user: User[],todo:Todo) {
        if (user.length == 0) {
            this.users = new Array<User>();
            console.log("No user !")
        }
        //  else if (this.title == title) {
        //     console.log("No changes !");
        // }
            else {
            this.users = user;
            console.log("user has been changed");
        }
    }

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
        return isTaskCompleted;
    }

}
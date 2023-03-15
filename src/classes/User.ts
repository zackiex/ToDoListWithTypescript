import {Todo} from "./Todo";

export class User {
    constructor(
        public todo: Todo[],
        public username: string,
    ) {
    }

    displayUserInfo(): string {
        return `Username :${this.username} \n`;
    }

    setUserName(name: string) {
         this.username = name;
    }
}
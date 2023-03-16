import {Todo} from "./Todo";

export class User {
    constructor(
        public username: string,
        public todos: Todo[],
    ) {
    }

    getUserName() {
        return this.username;
    }

    setUserName(name: string) {
        this.username = name;
    }

    // Init to do list in Array
    addToDo(todo: Todo) {
        if (this.todos == null) {
            this.todos = new Array<Todo>();
        }
        this.todos.push(todo);
    }

}
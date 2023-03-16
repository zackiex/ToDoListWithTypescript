"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, todos) {
        this.username = username;
        this.todos = todos;
    }
    getUserName() {
        return this.username;
    }
    setUserName(name) {
        this.username = name;
    }
    // Init to do list in Array
    addToDo(todo) {
        if (this.todos == null) {
            this.todos = new Array();
        }
        this.todos.push(todo);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserAndTasks = void 0;
function checkUserAndTasks(array) {
    let numberOfUsers = 1;
    let count = 0;
    while (count < array.length) {
        if (array[count].username !== "") {
            console.log("The user number " + numberOfUsers + " is " + array[count].username);
            if (array[count].todos.length == 0) {
                console.log("And he has no tasks");
            }
            else {
                console.log("His tasks are \n");
                console.log(array[count].todos);
            }
        }
        else {
            console.log("The user number " + count + " is empty");
        }
        count++;
        numberOfUsers++;
    }
}
exports.checkUserAndTasks = checkUserAndTasks;
//# sourceMappingURL=functions.js.map
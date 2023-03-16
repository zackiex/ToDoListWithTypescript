export function checkUserAndTasks(array:Array<any>) {
    let numberOfUsers: number = 1;
    let count: number = 0;
    while (count < array.length) {
        if (array[count].username !== "") {
            console.log("The user number " + numberOfUsers + " is " + array[count].username);
            if (array[count].todos.length == 0) {
                console.log("And he has no tasks")
            } else {
                console.log("His tasks are \n");
                console.log(array[count].todos);
            }
        } else {
            console.log("The user number " + count + " is empty");
        }
        count++;
        numberOfUsers++;
    }
}
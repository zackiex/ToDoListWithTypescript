import {TodoItem} from "../classes/TodoItem";
import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";

describe("Validate the input Fieled", () => {
    test("Check if the name is empty", () => {
        //GIVEN
        const username = 'testUser'
        const todoLists: TodoList[] = []
        //WHEN
        const user = new User(username);
        const deadLineToDo3 = new Date(2023, 12, 12);
        const created_atToDo3 = new Date(2023, 1, 1);
        const todoList = user.createTodoList('Development');
        const todoList2 = user.createTodoList('Shopping');
        const todoItem = todoList.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
        const todoItem2 = todoList2.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
        //THEN
        expect(user.username).toBe(username);
        expect(user.todoLists).toHaveLength(2)
    });

    test("Check if the name is empty", () => {
        //GIVEN
        const username = 'testUser'
        const todos = undefined
        //WHEN
        const user = new User(username)
        //THEN
        expect(user.username).toBe(username);
        expect(user.todoLists).toHaveLength(0)
    });
})

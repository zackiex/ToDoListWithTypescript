import {TodoItem} from "../classes/TodoItem";
import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";

describe("Validate the input Fieled", () => {
    test("Check if the name is empty", () => {
        //GIVEN
        const username = 'testUser'
        const deadLineToDo3 = new Date(2023, 12, 12);
        const created_atToDo3 = new Date(2023, 1, 1);
        //WHEN
        const user = new User(username);
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

describe("TodoList", () => {
    test("should create a new todo list", () => {
        //GIVEN
        const username = 'testUser'
        //WHEN
        const user = new User(username);
        const todoList = user.createTodoList('Development');
        //THEN
        expect(todoList.listName).toBe('Development');
        expect(todoList.todoItem.length).toBe(0);
    });

    test("should create item to the to-do-list", () => {
        //GIVEN
        const username = 'testUser'
        const deadLineToDo3 = new Date(2023, 12, 12);
        const created_atToDo3 = new Date(2023, 1, 1);
        //WHEN
        const user = new User(username);
        const todoList = user.createTodoList('Development');
        const todoItem = todoList.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
        const todoItem1 = todoList.createTodoItem('Send email to boss', deadLineToDo3, created_atToDo3, "C3");
        //THEN
        expect(todoList.todoItem.length).toBe(2);
        expect(todoList.todoItem[0]).toBe(todoItem);
        expect(todoList.todoItem[1]).toBe(todoItem1);

    });
})
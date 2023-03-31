"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../classes/User");
const TodoList_1 = require("../classes/TodoList");
const globals_1 = require("@jest/globals");
describe('User', () => {
    test("can create a user", () => {
        //GIVEN
        //WHEN
        const user = new User_1.User("TestUser");
        //THEN
        (0, globals_1.expect)(user.username).toBe("TestUser");
        (0, globals_1.expect)(user.todoLists).toEqual([]);
    });
    test("should have the correct username", () => {
        //GIVEN
        //WHEN
        const user = new User_1.User("TestUser");
        //THEN
        (0, globals_1.expect)(user.username).toBe("TestUser");
    });
    test("should have an empty todoLists array by default", () => {
        //GIVEN
        //WHEN
        const user = new User_1.User("TestUser");
        //THEN
        (0, globals_1.expect)(user.todoLists).toHaveLength(0);
    });
    test("should be able to update username", () => {
        //GIVEN
        const user = new User_1.User("TestUser");
        //WHEN
        user.username = "newusername";
        //THEN
        (0, globals_1.expect)(user.username).toBe("newusername");
    });
    test('should contains TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        //WHEN
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //THEN
        (0, globals_1.expect)(user.todoLists).toHaveLength(1);
        (0, globals_1.expect)(user.todoLists).toContain(todoList);
        (0, globals_1.expect)(user.todoLists[0]).toBe(todoList);
    });
    test('should be able to delete a TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoList2 = new TodoList_1.TodoList('testTodoList1', user);
        const todoList3 = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        user.deleteTodoList(todoList3);
        //THEN
        (0, globals_1.expect)(user.todoLists).not.toContain(todoList3);
        (0, globals_1.expect)(user.todoLists).toHaveLength(2);
        (0, globals_1.expect)(user.todoLists).toEqual([todoList, todoList2]);
    });
    test('Relationship-Test -> User 1:n Todolist ', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        //WHEN
        const todoList2 = new TodoList_1.TodoList('testTodoList2', user);
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoList3 = new TodoList_1.TodoList('testTodoList3', user);
        //THEN
        (0, globals_1.expect)(user.todoLists).toEqual([todoList2, todoList, todoList3]);
        (0, globals_1.expect)(user.todoLists).toHaveLength(3);
    });
});
//# sourceMappingURL=User.test.js.map
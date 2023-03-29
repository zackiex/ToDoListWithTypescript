"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../classes/User");
const TodoList_1 = require("../classes/TodoList");
const globals_1 = require("@jest/globals");
describe('TodoList', () => {
    test("should have the correct listName", () => {
        //GIVEN
        const user = new User_1.User("testUser");
        //WHEN
        const todoList = new TodoList_1.TodoList("testList", user);
        //THEN
        (0, globals_1.expect)(todoList.listName).toBe("testList");
    });
    test("should be able to update listName", () => {
        //GIVEN
        const user = new User_1.User("testUser");
        const todoList = new TodoList_1.TodoList("testList", user);
        //WHEN
        todoList.listName = "new todolist name";
        //THEN
        (0, globals_1.expect)(todoList.listName).toBe("new todolist name");
    });
    test('Relationship-Test -> TodoList belong to a OneUser', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        //WHEN
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //THEN
        (0, globals_1.expect)(todoList.user).toEqual(user);
        (0, globals_1.expect)(todoList.user).toBe(user);
    });
});
//# sourceMappingURL=TodoList.test.js.map
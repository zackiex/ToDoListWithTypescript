"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("../classes/TodoItem");
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
describe("Delete Methods Testing", () => {
});
describe("Update Methods Testing", () => {
    test("can set username in User", () => {
        const user = new User_1.User("TestUser");
        user.username = "TestUserUpdate";
        (0, globals_1.expect)(user.username).toBe("TestUserUpdate");
    });
    test('Test the update-todoList methode in User', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoList2 = new TodoList_1.TodoList('testTodoList2', user);
        user.todoLists = [todoList2];
        //THEN
        (0, globals_1.expect)(user.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(user.todoLists).toContain(todoList2);
    });
    test('Test the update-user methode in TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const user2 = new User_1.User('TestUser2');
        //WHEN
        todoList.user = user2;
        //THEN
        (0, globals_1.expect)(todoList.user).not.toEqual(user);
        (0, globals_1.expect)(todoList.user).toEqual(user2);
    });
    test('Test the update-TodoItems methode in TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        //WHEN
        const todoItem2 = new TodoItem_1.TodoItem('testTodoItem2', todoList);
        todoList.todoItems = [todoItem2];
        //THEN
        (0, globals_1.expect)(todoList.todoItems).not.toContain(todoItem1);
        (0, globals_1.expect)(todoList.todoItems).toContain(todoItem2);
    });
    test('Test the update-TodoLists methode in TodoItem', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        //WHEN
        const todoList2 = new TodoList_1.TodoList('testTodoList2', user);
        todoItem1.updateTodoList(todoList2);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(todoItem1.todoLists).toContain(todoList2);
    });
});
//# sourceMappingURL=User.test.js.map
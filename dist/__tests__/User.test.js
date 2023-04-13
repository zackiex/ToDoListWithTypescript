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
    test('should be able to update ', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        //WHEN
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoList2 = new TodoList_1.TodoList('testTodoList2', user);
        user.todoLists = [todoList2];
        //THEN
        (0, globals_1.expect)(user.todoLists).toContain(todoList2);
        (0, globals_1.expect)(user.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(user.todoLists).toEqual([todoList2]);
        (0, globals_1.expect)(user.todoLists).toHaveLength(1);
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
        (0, globals_1.expect)(todoList.user).toBe(user);
    });
    test('should be able to delete a TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        user.deleteTodoList(todoList);
        //THEN
        (0, globals_1.expect)(user.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(user.todoLists).toHaveLength(0);
        (0, globals_1.expect)(user.todoLists).toEqual([]);
        (0, globals_1.expect)(todoList.user).toEqual({});
    });
    test('should contain todoItem', () => {
        //GIVEN
        const user = new User_1.User('TestUser');
        const todoList = new TodoList_1.TodoList('testTodoList', user);
        //WHEN
        const todoItem = new TodoItem_1.TodoItem('todoItemName', todoList);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).toContain(todoItem);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(1);
        (0, globals_1.expect)(todoItem.todoLists).toContain(todoList);
        (0, globals_1.expect)(todoItem.todoLists).toHaveLength(1);
        //WHEN
        todoList.deleteTodoItem(todoItem);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).not.toContain(todoItem);
        (0, globals_1.expect)(todoList.todoItems).toEqual([]);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(0);
        (0, globals_1.expect)(todoItem.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(todoItem.todoLists).toEqual([]);
        (0, globals_1.expect)(todoItem.todoLists).toHaveLength(0);
    });
    test('should delete', () => {
        //GIVEN
        const user = new User_1.User('TestUser');
        const todoList = new TodoList_1.TodoList('testTodoList', user);
        const todoItem = new TodoItem_1.TodoItem('todoItemName', todoList);
        //WHEN
        todoItem.deleteTodoList(todoList);
        //THEN
        (0, globals_1.expect)(todoItem.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(todoItem.todoLists).toEqual([]);
        (0, globals_1.expect)(todoItem.todoLists).toHaveLength(0);
        (0, globals_1.expect)(todoList.todoItems).not.toContain(todoItem);
        (0, globals_1.expect)(todoList.todoItems).toEqual([]);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(0);
    });
});
//# sourceMappingURL=User.test.js.map
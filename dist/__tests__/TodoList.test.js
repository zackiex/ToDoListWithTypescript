"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../classes/User");
const TodoList_1 = require("../classes/TodoList");
const globals_1 = require("@jest/globals");
const TodoItem_1 = require("../classes/TodoItem");
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
    test("should be able to update user", () => {
        //GIVEN
        const user = new User_1.User('User');
        const newUser = new User_1.User("Newuser");
        const todoList = new TodoList_1.TodoList('todoList-Name', user);
        //WHEN
        todoList.user = newUser;
        //THEN
        (0, globals_1.expect)(todoList.user).toBe(newUser);
    });
    test('should have an empty by default', () => {
        //GIVEN
        const user = new User_1.User('User');
        //WHEN
        const todoList = new TodoList_1.TodoList('todoList-Name', user);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(0);
    });
    test('Relationship -> TodoList contains TodoItem', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        //todoItem1.addTodoList(todoList)
        //THEN
        (0, globals_1.expect)(todoList.todoItems[0]).toBe(todoItem1);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(1);
    });
    test('Relationship -> TodoList contains n TodoItem', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        const todoItem2 = new TodoItem_1.TodoItem('testTodoItem2', todoList);
        const todoItem3 = new TodoItem_1.TodoItem('testTodoItem3', todoList);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).toEqual([todoItem1, todoItem2, todoItem3]);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(3);
    });
    test('should be able to delete a todoItem', () => {
        //GIVEN
        const user = new User_1.User('User');
        const todolist = new TodoList_1.TodoList('Test-TodoList', user);
        const todoitem = new TodoItem_1.TodoItem("Test-todoItem", todolist);
        //WHEN
        todolist.deleteTodoItem(todoitem);
        //THEN
        (0, globals_1.expect)(todolist.todoItems).toHaveLength(0);
        (0, globals_1.expect)(todolist.todoItems).not.toContain(todoitem);
    });
});
//# sourceMappingURL=TodoList.test.js.map
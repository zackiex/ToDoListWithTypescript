"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../classes/User");
const TodoItem_1 = require("../classes/TodoItem");
const globals_1 = require("@jest/globals");
const TodoList_1 = require("../classes/TodoList");
describe('TodoItem', () => {
    test('should have the correct description', () => {
        //GIVEN
        const user = new User_1.User('testUser');
        const todoList = new TodoList_1.TodoList('test-TodoList', user);
        //WHEN
        const todoItem = new TodoItem_1.TodoItem('test-dotoItem', todoList);
        //THEN
        (0, globals_1.expect)(todoItem.description).toBe('test-dotoItem');
    });
    test('should be able to update description', () => {
        //GIVEN
        const user = new User_1.User('testUser');
        const todoList = new TodoList_1.TodoList('test-TodoList', user);
        const todoItem = new TodoItem_1.TodoItem('test-dotoItem', todoList);
        //WHEN
        todoItem.description = 'New description';
        //THEN
        (0, globals_1.expect)(todoItem.description).toBe('New description');
    });
    test('should have the correct todoList', () => {
        //GIVEN
        const user = new User_1.User('user');
        const todolist = new TodoList_1.TodoList('todoList', user);
        //WHEN
        const todoitem = new TodoItem_1.TodoItem('todoItem', todolist);
        //THEN
        (0, globals_1.expect)(todoitem.todoLists).toEqual([todolist]);
    });
    test('should be able to update todoList', () => {
        //GIVEN
        const user = new User_1.User('testUser');
        const todolist = new TodoList_1.TodoList('todoListName', user);
        const todoitem = new TodoItem_1.TodoItem('todoitemName', todolist);
        //WHEN
        const todolist2 = new TodoList_1.TodoList('todolist2', user);
        todoitem.todoLists = [todolist2];
        //THEN
        (0, globals_1.expect)(todoitem.todoLists).toEqual([todolist2]);
        (0, globals_1.expect)(todoitem.todoLists).toHaveLength(1);
    });
    test('TodoItem belong to a TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).toStrictEqual([todoList]);
        (0, globals_1.expect)(todoItem1.todoLists).toHaveLength(1);
    });
    test('TodoItem belong to n TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoList2 = new TodoList_1.TodoList('testTodoList2', user);
        const todoList3 = new TodoList_1.TodoList('testTodoList3', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        todoItem1.addTodoList(todoList2);
        todoItem1.addTodoList(todoList3);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).toEqual([todoList, todoList2, todoList3]);
        (0, globals_1.expect)(todoItem1.todoLists).toHaveLength(3);
    });
    test('should be able to delete a todoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        //WHEN
        todoItem1.deleteTodoList(todoList);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).not.toContain(todoList);
        (0, globals_1.expect)(todoItem1.todoLists).toHaveLength(0);
    });
});
//# sourceMappingURL=TodoItem.test.js.map
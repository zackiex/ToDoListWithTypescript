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
    test('should be User contains TodoList', () => {
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
describe('TodoList <-> TodoItem relationship', () => {
    test('TodoList contains TodoItem', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        todoItem1.addTodoList(todoList);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).toContain(todoItem1);
    });
    test('TodoList 1:n TodoItem relationship test', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        const todoItem2 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        const todoItem3 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        todoItem1.addTodoList(todoList);
        todoItem2.addTodoList(todoList);
        todoItem3.addTodoList(todoList);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).toEqual([todoItem1, todoItem2, todoItem3]);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(3);
    });
    test('TodoItem belong to a TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        todoItem1.addTodoList(todoList);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).toContain(todoList);
    });
    test('TodoItem belong to n TodoList', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoList2 = new TodoList_1.TodoList('testTodoList2', user);
        //WHEN
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        todoItem1.addTodoList(todoList);
        todoItem1.addTodoList(todoList2);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).toEqual([todoList, todoList2]);
        (0, globals_1.expect)(todoItem1.todoLists).toHaveLength(2);
    });
});
describe("Delete Methods Testing", () => {
    test('Test the deleteTodoItem methode in TodoList ', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        const todoItem2 = new TodoItem_1.TodoItem('testTodoItem2', todoList);
        const todoItem3 = new TodoItem_1.TodoItem('testTodoItem3', todoList);
        //WHEN
        todoItem1.addTodoList(todoList);
        todoItem2.addTodoList(todoList);
        todoItem3.addTodoList(todoList);
        todoList.deleteTodoItem(todoItem1);
        //THEN
        (0, globals_1.expect)(todoList.todoItems).not.toContain(todoItem1);
        (0, globals_1.expect)(todoList.todoItems).toEqual([todoItem2, todoItem3]);
        (0, globals_1.expect)(todoList.todoItems).toHaveLength(2);
    });
    test('Test the deleteTodoList methode in TodoItem ', () => {
        //GIVEN
        const user = new User_1.User('TestUser1');
        const todoList = new TodoList_1.TodoList('testTodoList1', user);
        const todoList2 = new TodoList_1.TodoList('testTodoList1', user);
        const todoList3 = new TodoList_1.TodoList('testTodoList1', user);
        const todoItem1 = new TodoItem_1.TodoItem('testTodoItem1', todoList);
        todoItem1.addTodoList(todoList);
        todoItem1.addTodoList(todoList2);
        todoItem1.addTodoList(todoList3);
        //WHEN
        todoItem1.deleteTodoList(todoList2);
        //THEN
        (0, globals_1.expect)(todoItem1.todoLists).not.toContain(todoList2);
        (0, globals_1.expect)(todoItem1.todoLists).toEqual([todoList, todoList3]);
    });
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
// describe("Validate the input Field", () => {
//     test("Check user Field", () => {
//         //GIVEN
//         const username = 'testUser'
//         const deadLineToDo3 = new Date(2023, 12, 12);
//         const created_atToDo3 = new Date(2023, 1, 1);
//         //WHEN
//         const user = new User(username);
//         const todoList = user.createTodoList('Development');
//         const todoList2 = user.createTodoList('Shopping');
//         const todoItem = todoList.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
//         const todoItem2 = todoList2.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
//         const todoItem3 = todoList.createTodoItem('Buy bread', deadLineToDo3, created_atToDo3, "C1");
//         //THEN
//         expect(user.username).toBe(username);
//         expect(user.todoLists).toHaveLength(2);
//         expect(user.todoLists.length).toBe(2);
//         expect(todoList.todoItem).toEqual([todoItem, todoItem3]);
//     });
//
//     test("Check if the name is empty", () => {
//         //GIVEN
//         const username = 'testUser'
//         const todos = undefined
//         //WHEN
//         const user = new User(username)
//         //THEN
//         expect(user.username).toBe(username);
//         expect(user.todoLists).toHaveLength(0)
//     });
// })
//
// describe("TodoList", () => {
//     test("should create a new todo list", () => {
//         //GIVEN
//         const username = 'testUser'
//         //WHEN
//         const user = new User(username);
//         const todoList = user.createTodoList('Development');
//         //THEN
//         expect(todoList.listName).toBe('Development');
//         expect(todoList.todoItem.length).toBe(0);
//     });
//
//     test("should create item to the to-do-list", () => {
//         //GIVEN
//         const username = 'testUser'
//         const deadLineToDo3 = new Date(2023, 12, 12);
//         const created_atToDo3 = new Date(2023, 1, 1);
//         //WHEN
//         const user = new User(username);
//         const todoList = user.createTodoList('Development');
//         const todoItem = todoList.createTodoItem('Finish project', deadLineToDo3, created_atToDo3, "C2");
//         const todoItem1 = todoList.createTodoItem('Send email to boss', deadLineToDo3, created_atToDo3, "C3");
//         //THEN
//         expect(todoList.todoItem.length).toBe(2);
//         expect(todoList.todoItem[0]).toBe(todoItem);
//         expect(todoList.todoItem[1]).toBe(todoItem1);
//
//     });
// });
//# sourceMappingURL=User.test.js.map
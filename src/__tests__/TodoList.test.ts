import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";
import {expect} from "@jest/globals";
import {TodoItem} from "../classes/TodoItem";

describe('TodoList', () => {
    test("should have the correct listName", () => {
        //GIVEN
        const user = new User("testUser");
        //WHEN
        const todoList = new TodoList("testList", user);
        //THEN
        expect(todoList.listName).toBe("testList");
    });
    test("should be able to update listName", () => {
        //GIVEN
        const user = new User("testUser");
        const todoList = new TodoList("testList", user);
        //WHEN
        todoList.listName = "new todolist name";
        //THEN
        expect(todoList.listName).toBe("new todolist name");
    });
    test('Relationship-Test -> TodoList belong to a OneUser', () => {
        //GIVEN
        const user = new User('TestUser1')
        //WHEN
        const todoList = new TodoList('testTodoList1', user)
        //THEN
        expect(todoList.user).toEqual(user)
        expect(todoList.user).toBe(user)
    });
    test("should be able to update user", () => {
        //GIVEN
        const user = new User('User')
        const newUser = new User("Newuser");
        const todoList = new TodoList('todoList-Name', user)
        //WHEN
        todoList.user = newUser;
        //THEN
        expect(todoList.user).toBe(newUser);
    });
    test('should have an empty by default', () => {
        //GIVEN
        const user = new User('User')
        //WHEN
        const todoList = new TodoList('todoList-Name', user)
        //THEN
        expect(todoList.todoItems).toHaveLength(0);
    });
    test('Relationship -> TodoList contains TodoItem', () => {
        //GIVEN
        const user = new User('TestUser1')
        const todoList = new TodoList('testTodoList1', user)
        //WHEN
        const todoItem1 = new TodoItem('testTodoItem1', todoList)
        //todoItem1.addTodoList(todoList)
        //THEN
        expect(todoList.todoItems[0]).toBe(todoItem1);
        expect(todoList.todoItems).toHaveLength(1);
    });
    test('Relationship -> TodoList contains n TodoItem', () => {
        //GIVEN
        const user = new User('TestUser1')
        const todoList = new TodoList('testTodoList1', user)
        //WHEN
        const todoItem1 = new TodoItem('testTodoItem1', todoList)
        const todoItem2 = new TodoItem('testTodoItem2', todoList)
        const todoItem3 = new TodoItem('testTodoItem3', todoList)
        //THEN
        expect(todoList.todoItems).toEqual([todoItem1, todoItem2, todoItem3]);
        expect(todoList.todoItems).toHaveLength(3);
    });
    test('should be able to delete a todoItem', () => {
        //GIVEN
        const user = new User('User');
        const todolist = new TodoList('Test-TodoList', user);
        const todoitem = new TodoItem("Test-todoItem", todolist);
        //WHEN
        todolist.deleteTodoItem(todoitem);
        //THEN
        expect(todolist.todoItems).toHaveLength(0);
        expect(todolist.todoItems).not.toContain(todoitem);
    });
})
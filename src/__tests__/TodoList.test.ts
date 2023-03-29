import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";
import {expect} from "@jest/globals";

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

})
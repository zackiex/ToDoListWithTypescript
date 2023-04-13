import {TodoItem} from "../classes/TodoItem";
import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";
import {expect} from "@jest/globals";


describe('User', () => {
        test("can create a user", () => {
            //GIVEN
            //WHEN
            const user = new User("TestUser");
            //THEN
            expect(user.username).toBe("TestUser");
            expect(user.todoLists).toEqual([]);
        });
        test("should have the correct username", () => {
            //GIVEN

            //WHEN
            const user = new User("TestUser");
            //THEN
            expect(user.username).toBe("TestUser");
        });
        test("should have an empty todoLists array by default", () => {
            //GIVEN

            //WHEN
            const user = new User("TestUser");
            //THEN
            expect(user.todoLists).toHaveLength(0);
        });
        test("should be able to update username", () => {
            //GIVEN
            const user = new User("TestUser");
            //WHEN
            user.username = "newusername";
            //THEN
            expect(user.username).toBe("newusername");
        });
        test('should be able to update ', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList = new TodoList('testTodoList1', user)
            const todoList2 = new TodoList('testTodoList2', user)
            user.todoLists = [todoList2]
            //THEN
            expect(user.todoLists).toContain(todoList2)
            expect(user.todoLists).not.toContain(todoList)
            expect(user.todoLists).toEqual([todoList2])
            expect(user.todoLists).toHaveLength(1)
        });


        test('should contains TodoList', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(user.todoLists).toHaveLength(1);
            expect(user.todoLists).toContain(todoList)
            expect(user.todoLists[0]).toBe(todoList);
            expect(todoList.user).toBe(user)
        });

        test('should be able to delete a TodoList', () => {
            //GIVEN
            const user = new User('TestUser1')
            const todoList = new TodoList('testTodoList1', user)
            //WHEN
            user.deleteTodoList(todoList)
            //THEN
            expect(user.todoLists).not.toContain(todoList)
            expect(user.todoLists).toHaveLength(0)
            expect(user.todoLists).toEqual([])
            expect(todoList.user).toEqual({})
        });

        test('should contain todoItem', () => {
            //GIVEN
            const user = new User('TestUser')
            const todoList = new TodoList('testTodoList', user)
            //WHEN
            const todoItem = new TodoItem('todoItemName', todoList)
            //THEN
            expect(todoList.todoItems).toContain(todoItem)
            expect(todoList.todoItems).toHaveLength(1)
            expect(todoItem.todoLists).toContain(todoList)
            expect(todoItem.todoLists).toHaveLength(1)

            //WHEN
            todoList.deleteTodoItem(todoItem);
            //THEN
            expect(todoList.todoItems).not.toContain(todoItem)
            expect(todoList.todoItems).toEqual([])
            expect(todoList.todoItems).toHaveLength(0)
            expect(todoItem.todoLists).not.toContain(todoList)
            expect(todoItem.todoLists).toEqual([])
            expect(todoItem.todoLists).toHaveLength(0)
        });


        test('should delete', () => {
            //GIVEN
            const user = new User('TestUser')
            const todoList = new TodoList('testTodoList', user)
            const todoItem = new TodoItem('todoItemName', todoList)
            //WHEN
            todoItem.deleteTodoList(todoList);
            //THEN
            expect(todoItem.todoLists).not.toContain(todoList)
            expect(todoItem.todoLists).toEqual([])
            expect(todoItem.todoLists).toHaveLength(0)
            expect(todoList.todoItems).not.toContain(todoItem)
            expect(todoList.todoItems).toEqual([])
            expect(todoList.todoItems).toHaveLength(0)

        });
    }
);
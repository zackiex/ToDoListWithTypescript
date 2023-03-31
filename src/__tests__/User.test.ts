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

        test('should contains TodoList', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(user.todoLists).toHaveLength(1);
            expect(user.todoLists).toContain(todoList)
            expect(user.todoLists[0]).toBe(todoList);
        });
        test('should be able to delete a TodoList', () => {
            //GIVEN
            const user = new User('TestUser1')
            const todoList = new TodoList('testTodoList1', user)
            const todoList2 = new TodoList('testTodoList1', user)
            const todoList3 = new TodoList('testTodoList1', user)
            //WHEN
            user.deleteTodoList(todoList3)
            //THEN
            expect(user.todoLists).not.toContain(todoList3)
            expect(user.todoLists).toHaveLength(2)
            expect(user.todoLists).toEqual([todoList, todoList2])
        });

        test('Relationship-Test -> User 1:n Todolist ', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList2 = new TodoList('testTodoList2', user)
            const todoList = new TodoList('testTodoList1', user)
            const todoList3 = new TodoList('testTodoList3', user)
            //THEN
            expect(user.todoLists).toEqual([todoList2, todoList, todoList3])
            expect(user.todoLists).toHaveLength(3)
        });
    }
);
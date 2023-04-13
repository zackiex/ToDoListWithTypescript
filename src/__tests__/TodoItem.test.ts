import {User} from "../classes/User";
import {TodoItem} from "../classes/TodoItem";
import {expect} from "@jest/globals";
import {TodoList} from "../classes/TodoList";

describe('TodoItem', () => {
    test('should have the correct description', () => {
        //GIVEN
        const user = new User('testUser')
        const todoList = new TodoList('test-TodoList', user)
        //WHEN
        const todoItem = new TodoItem('test-dotoItem', todoList)
        //THEN
        expect(todoItem.description).toBe('test-dotoItem')
    });
    test('should be able to update description', () => {
        //GIVEN
        const user = new User('testUser')
        const todoList = new TodoList('test-TodoList', user)
        const todoItem = new TodoItem('test-dotoItem', todoList)
        //WHEN
        todoItem.description = 'New description'
        //THEN
        expect(todoItem.description).toBe('New description')

    });
    test('should have the correct todoList', () => {
        //GIVEN
        const user = new User('user')
        const todolist = new TodoList('todoList', user)
        //WHEN
        const todoitem = new TodoItem('todoItem', todolist)
        //THEN
        expect(todoitem.todoLists).toEqual([todolist])
    });
    test('should be able to update todoList', () => {
        //GIVEN
        const user = new User('testUser')
        const todolist = new TodoList('todoListName', user)
        const todoitem = new TodoItem('todoitemName', todolist)
        //WHEN
        const todolist2 = new TodoList('todolist2', user)
        todoitem.todoLists = [todolist2]
        //THEN
        expect(todoitem.todoLists).toEqual([todolist2])
        expect(todoitem.todoLists).toHaveLength(1)
    });
    test('TodoItem belong to a TodoList', () => {
        //GIVEN
        const user = new User('TestUser1')
        const todoList = new TodoList('testTodoList1', user)
        //WHEN
        const todoItem1 = new TodoItem('testTodoItem1', todoList)
        //THEN
        expect(todoItem1.todoLists).toStrictEqual([todoList])
        expect(todoItem1.todoLists).toHaveLength(1)
    });
    test('TodoItem belong to n TodoList', () => {
        //GIVEN
        const user = new User('TestUser1')
        const todoList = new TodoList('testTodoList1', user)
        const todoList2 = new TodoList('testTodoList2', user)
        const todoList3 = new TodoList('testTodoList3', user)
        //WHEN
        const todoItem1 = new TodoItem('testTodoItem1', todoList)
        todoItem1.addTodoList(todoList2)
        todoItem1.addTodoList(todoList3)
        //THEN
        expect(todoItem1.todoLists).toEqual([todoList, todoList2, todoList3])
        expect(todoItem1.todoLists).toHaveLength(3)
    });
    test('should be able to delete a todoList', () => {
        //GIVEN
        const user = new User('TestUser1')
        const todoList = new TodoList('testTodoList1', user)
        const todoItem1 = new TodoItem('testTodoItem1', todoList)
        //WHEN
        todoItem1.deleteTodoList(todoList)
        //THEN
        expect(todoItem1.todoLists).not.toContain(todoList)
        expect(todoItem1.todoLists).toHaveLength(0)
    });
});
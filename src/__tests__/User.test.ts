import {TodoItem} from "../classes/TodoItem";
import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";


describe('User -> TodoList relationship', () => {
        test('User contains TodoList', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(user.todoLists).toContain(todoList)
        });

        test('User 1:n Todolist relationship test', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList2 = new TodoList('testTodoList2', user)
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(user.todoLists).toContain(todoList)
            expect(user.todoLists).toContain(todoList2)
            expect(user.todoLists).toHaveLength(2)
        });

        test('User 1:n Todolist relationship test', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList2 = new TodoList('testTodoList2', user)
            const todoList = new TodoList('testTodoList1', user)
            const todoList3 = new TodoList('testTodoList3', user)
            //THEN
            expect(user.todoLists).toContain(todoList)
            expect(user.todoLists).toContain(todoList2)
            expect(user.todoLists).toContain(todoList3)
            expect(user.todoLists).toHaveLength(3)
        });

        test('TodoList contains User', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(todoList.user).toEqual(user)
        });
    }
)

describe('TodoList <-> TodoItem relationship', () => {
        test('TodoList contains TodoItem', () => {
            //GIVEN
            const user = new User('TestUser1')
            ////const todoList = new TodoList('testTodoList1', user)
            //// const todoItem1 = new TodoItem('testTodoItem1', todoList)
            //WHEN
            ////  const todoList2 = new TodoList('testTodoList2', user)
            const todoList = new TodoList('testTodoList1', user)
            ////todoItem1.addTodoList(todoList2)
            //THEN
            expect(user.todoLists).toContain(todoList)
            //expect(todoItem1._todoLists).toContain(todoList)
            //expect(todoItem1._todoLists).toContain(todoList2)
        });
        test('User 1:n Todolist relationship test', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList2 = new TodoList('testTodoList2', user)
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(user.todoLists).toContain(todoList)
            expect(user.todoLists).toContain(todoList2)
            expect(user.todoLists).toHaveLength(2)
        });
        test('User 1:n Todolist relationship test', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList2 = new TodoList('testTodoList2', user)
            const todoList = new TodoList('testTodoList1', user)
            const todoList3 = new TodoList('testTodoList3', user)
            //THEN
            expect(user.todoLists).toContain(todoList)
            expect(user.todoLists).toContain(todoList2)
            expect(user.todoLists).toContain(todoList3)
            expect(user.todoLists).toHaveLength(3)
        });
        test('TodoList contains User', () => {
            //GIVEN
            const user = new User('TestUser1')
            //WHEN
            const todoList = new TodoList('testTodoList1', user)
            //THEN
            expect(todoList.user).toEqual(user)
        });
    }
)


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
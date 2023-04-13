import app from "../index";
import request from 'supertest';
import {User} from "../classes/User";
import {TodoList} from "../classes/TodoList";
import {TodoItem} from "../classes/TodoItem";
import * as http from "http";


const user = new User('createUser');
const todoList = new TodoList('TodoTestTodoList', user);
const todoItem = new TodoItem(`todoItem description 1 `, todoList);
let server: http.Server;
const users: User[] = [];

beforeEach(async () => {
    server = await app.listen(3001, () => {
        console.log('Server started on port 3001');
    });
});
afterEach(() => {
    server.close(() => {
        console.log('Server closed');
    });
});

describe('API /users', () => {
    test("Should create a new user", async () => {
        //GIVEN
        //WHERE
        const response = await request(app).post("/users").send({
            "username": "testUserPost"
        });
        //THEN
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(new User("testUserPost"));
    });

    test('Should update the user by name', async () => {
        //GIVEN
        const createUserResponse = await request(app)
            .post('/users')
            .send({
                "username": "createUser"
            });
        //WHEN
        const updateUserResponse = await request(app)
            .put(`/users/createUser`)
            .send({
                "username": "updateUser"
            });
        //THEN
        expect(updateUserResponse.status).toBe(200);
        expect(updateUserResponse.body).toEqual(new User("updateUser"));
    });

    test('Should delete user by name', async () => {
        //GIVEN
        const createUserRes = await request(app).post('/users').send({
            "username": "createUser"
        });
        //WHEN
        const deleteUserRes = await request(app).delete('/users/createUser');
        //THEN
        expect(deleteUserRes.statusCode).toBe(200);
        expect(deleteUserRes.body).toEqual({});
    });

});
describe('API /user/todoList', () => {
    test('Should create a todoList for user by name', async () => {
        //GIVE
        const createUserRes = await request(app).post('/users').send({"username": "createUser"})
        //WHEN
        const createtodoListRes = await request(app).post('/users/createUser/todoList').send({
            "listName": "TodoTestTodoList",
        })
        //THEN
        expect(createtodoListRes.statusCode).toBe(200);
        expect(createtodoListRes.body).toEqual({
            "listName": "TodoTestTodoList",
            "todoItems": []
        })
    });

    test('Should update the todoList name', async () => {
        //GIVEN
        const createUserRes = await request(app).post('/users').send({"username": "User"})
        const createtodoListRes = await request(app).post('/users/User/todoList').send({
            "listName": "TodoList",
        });
        //WHEN
        const updateTodoListRes = await request(app).put('/users/User/TodoList').send({
            "listName": "UpdatedTodoListName",
        });
        //THEN
        expect(updateTodoListRes.statusCode).toBe(200);
        expect(updateTodoListRes.body).toEqual([{
            "listName": "UpdatedTodoListName",
            "todoItems": []
        }]);
    });

    test('Should delete todoList by name', async () => {
        //GIVEN
        const creatUserRes = await request(app).post('/users').send({"username": "testUser"});
        const creatTodoListRes = await request(app).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        //WHEN
        const deletTodoListRes = await request(app).delete('/users/testUser/TodoListName');
        //THEN
        expect(deletTodoListRes.statusCode).toBe(200);
        expect(deletTodoListRes.body).toEqual([])
    });
});

describe('API /user/todoList/todoItem', () => {
    test('Should creat a todoItem', async () => {
        //GIVEN
        const createUserRes = await request(app).post('/users').send({
            "username": "testUser"
        });
        const createTodoListRes = await request(app).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        //WHEN
        const createTodoItemRes = await request(app).post('/users/testUser/TodoListName/todoItem')
            .send({"itemName": "todoItemName"})
        //THEN
        expect(createTodoItemRes.statusCode).toBe(200);
        expect(createTodoItemRes.body).toEqual({"description": "todoItemName"})
    });

    test('Should update a todoItem by name', async () => {
        //GIVEN
        const createUserRes = await request(app).post('/users').send({
            "username": "testUser"
        });
        const createTodoListRes = await request(app).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        const createTodoItemRes = await request(app).post('/users/testUser/TodoListName/todoItem')
            .send({"itemName": "todoItemName"});
        //WHEN
        const updateTodoItemRes = await request(app).put('/users/testUser/TodoListName/todoItemName')
            .send({"itemName": "updateTodoItemName"});
        //THEN
        expect(updateTodoItemRes.statusCode).toBe(200);
        expect(updateTodoItemRes.body).toEqual([{"description": "updateTodoItemName"}]);
    });

    test('Should delete todoItem by name', async () => {
        //GIVEN
        const createUserRes = await request(app).post('/users').send({
            "username": "testUser"
        });
        const createTodoListRes = await request(app).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        const createTodoItemRes = await request(app).post('/users/testUser/TodoListName/todoItem')
            .send({"itemName": "todoItemName"});
        //WHEN
        const deletetodoItemRes = await request(app).delete('/users/testUser/TodoListName/todoItemName');
        //THEN
        expect(deletetodoItemRes.statusCode).toBe(200);
        expect(deletetodoItemRes.body).toEqual([]);
    });
});
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const User_1 = require("../classes/User");
const TodoList_1 = require("../classes/TodoList");
const TodoItem_1 = require("../classes/TodoItem");
const user = new User_1.User('createUser');
const todoList = new TodoList_1.TodoList('TodoTestTodoList', user);
const todoItem = new TodoItem_1.TodoItem(`todoItem description 1 `, todoList);
let server;
const users = [];
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    server = yield index_1.default.listen(3001, () => {
        console.log('Server started on port 3001');
    });
}));
afterEach(() => {
    server.close(() => {
        console.log('Server closed');
    });
});
describe('API /users', () => {
    test("Should create a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        //WHERE
        const response = yield (0, supertest_1.default)(index_1.default).post("/users").send({
            "username": "testUserPost"
        });
        //THEN
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(new User_1.User("testUserPost"));
    }));
    test('Should update the user by name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const createUserResponse = yield (0, supertest_1.default)(index_1.default)
            .post('/users')
            .send({
            "username": "createUser"
        });
        //WHEN
        const updateUserResponse = yield (0, supertest_1.default)(index_1.default)
            .put(`/users/createUser`)
            .send({
            "username": "updateUser"
        });
        //THEN
        expect(updateUserResponse.status).toBe(200);
        expect(updateUserResponse.body).toEqual(new User_1.User("updateUser"));
    }));
    test('Should delete user by name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const createUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({
            "username": "createUser"
        });
        //WHEN
        const deleteUserRes = yield (0, supertest_1.default)(index_1.default).delete('/users/createUser');
        //THEN
        expect(deleteUserRes.statusCode).toBe(200);
        expect(deleteUserRes.body).toEqual({});
    }));
});
describe('API /user/todoList', () => {
    test('Should create a todoList for user by name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVE
        const createUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({ "username": "createUser" });
        //WHEN
        const createtodoListRes = yield (0, supertest_1.default)(index_1.default).post('/users/createUser/todoList').send({
            "listName": "TodoTestTodoList",
        });
        //THEN
        expect(createtodoListRes.statusCode).toBe(200);
        expect(createtodoListRes.body).toEqual({
            "listName": "TodoTestTodoList",
            "todoItems": []
        });
    }));
    test('Should update the todoList name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const createUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({ "username": "User" });
        const createtodoListRes = yield (0, supertest_1.default)(index_1.default).post('/users/User/todoList').send({
            "listName": "TodoList",
        });
        //WHEN
        const updateTodoListRes = yield (0, supertest_1.default)(index_1.default).put('/users/User/TodoList').send({
            "listName": "UpdatedTodoListName",
        });
        //THEN
        expect(updateTodoListRes.statusCode).toBe(200);
        expect(updateTodoListRes.body).toEqual([{
                "listName": "UpdatedTodoListName",
                "todoItems": []
            }]);
    }));
    test('Should delete todoList by name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const creatUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({ "username": "testUser" });
        const creatTodoListRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        //WHEN
        const deletTodoListRes = yield (0, supertest_1.default)(index_1.default).delete('/users/testUser/TodoListName');
        //THEN
        expect(deletTodoListRes.statusCode).toBe(200);
        expect(deletTodoListRes.body).toEqual([]);
    }));
});
describe('API /user/todoList/todoItem', () => {
    test('Should creat a todoItem', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const createUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({
            "username": "testUser"
        });
        const createTodoListRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        //WHEN
        const createTodoItemRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/TodoListName/todoItem')
            .send({ "itemName": "todoItemName" });
        //THEN
        expect(createTodoItemRes.statusCode).toBe(200);
        expect(createTodoItemRes.body).toEqual({ "description": "todoItemName" });
    }));
    test('Should update a todoItem by name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const createUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({
            "username": "testUser"
        });
        const createTodoListRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        const createTodoItemRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/TodoListName/todoItem')
            .send({ "itemName": "todoItemName" });
        //WHEN
        const updateTodoItemRes = yield (0, supertest_1.default)(index_1.default).put('/users/testUser/TodoListName/todoItemName')
            .send({ "itemName": "updateTodoItemName" });
        //THEN
        expect(updateTodoItemRes.statusCode).toBe(200);
        expect(updateTodoItemRes.body).toEqual([{ "description": "updateTodoItemName" }]);
    }));
    test('Should delete todoItem by name', () => __awaiter(void 0, void 0, void 0, function* () {
        //GIVEN
        const createUserRes = yield (0, supertest_1.default)(index_1.default).post('/users').send({
            "username": "testUser"
        });
        const createTodoListRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/todoList').send({
            "listName": "TodoListName",
        });
        const createTodoItemRes = yield (0, supertest_1.default)(index_1.default).post('/users/testUser/TodoListName/todoItem')
            .send({ "itemName": "todoItemName" });
        //WHEN
        const deletetodoItemRes = yield (0, supertest_1.default)(index_1.default).delete('/users/testUser/TodoListName/todoItemName');
        //THEN
        expect(deletetodoItemRes.statusCode).toBe(200);
        expect(deletetodoItemRes.body).toEqual([]);
    }));
});
//# sourceMappingURL=index.test.js.map
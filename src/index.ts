import express from 'express';
import {User} from './classes/User';
import {TodoList} from './classes/TodoList';
import {TodoItem} from './classes/TodoItem';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const users: User[] = [];

// Create a new user
app.post("/users", (req, res) => {
    if (!req.body.username) {
        res.status(404).send('The username in body is required')
    } else {
        const username = req.body.username;
        const user = new User(username);
        users.push(user);
        res.send(user);
    }
});

// Get all users
app.get("/users", (req, res) => {
    res.send(users);
});

// get user by name
app.get('/users/:username', (req, res) => {
    if (!req.body.username) {
        res.status(404).send('The username in body is required')
    }
    const userName = req.params.username;
    const user = users.find(user => user.username === userName)
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// update user name
app.put('/users/:username', (req, res) => {
    if (!req.params.username) {
        res.status(404).send('The new username in body is required')
    }
    const userName = req.params.username;
    const user = users.find(user => user.username === userName)
    if (user) {
        user.username = req.body.username;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete user name
app.delete('/users/:username', (req, res) => {
    const userName = req.params.username;
    const index = users.findIndex(user => user.username === userName);
    if (index !== -1) {
        users.splice(index, 1);
        res.sendStatus(200);
    } else {
        res.status(404).send('User not found');
    }
});

// create todo list
app.post('/users/:username/todoList', (req, res) => {
    if (!req.params.username) {
        res.status(404).send('The username in request is required')
    }
    const username = req.params.username;
    const indexUser = users.findIndex(user => user.username === username);
    const user = users[indexUser]
    if (user) {
        if (!req.body.listName) {
            res.status(404).send('The List name in body is required')
        }
        const todoListName = req.body.listName;
        const todoList = new TodoList(todoListName, user);
        res.json(todoList.toJSON());
    } else {
        res.status(404).send('User not found');
    }
});

// get all todo list from user
app.get('/users/:username/todolists', (req, res) => {
    if (!req.params.username) {
        res.status(404).send('The username in request is required')
    }
    const username = req.params.username;
    const indexUser = users.findIndex(user => user.username === username);
    const user = users[indexUser]
    if (user) {
        res.json(user)
    } else {
        res.status(404).send('User not found');
    }
});

// update todo list
app.put('/users/:username/:listName', (req, res) => {
    if (!req.params.username || !req.params.listName) {
        res.status(404).send('The username and the list name are required')
    }
    const username = req.params.username;
    const indexUser = users.findIndex(user => user.username === username);
    const user = users[indexUser]
    if (user) {
        const listName = req.params.listName;
        const indexTodoList = user.todoLists.findIndex(todoList => todoList.listName === listName);
        if (user.todoLists[indexTodoList]) {
            const updateTodoListName = req.body.listName;
            user.todoLists[indexTodoList].listName = updateTodoListName
            res.json(user.todoLists);
        } else {
            res.status(404).send('TodoList not found');
        }

    } else {
        res.status(404).send('User not found');
    }
});
// Delete a todoList
app.delete('/users/:username/:listName', (req, res) => {
    if (!req.params.username || !req.params.listName) {
        res.status(404).send('The username and the list name are required')
    }
    const username = req.params.username;
    const indexUser = users.findIndex(user => user.username == username);
    const user = users[indexUser];
    if (user) {
        const listName = req.params.listName;
        const indexTodoList = user.todoLists.findIndex(todoList => todoList.listName === listName);
        if (user.todoLists[indexTodoList]) {
            user.deleteTodoList(user.todoLists[indexTodoList]);
            res.json(user.todoLists);
        } else {
            res.status(404).send('TodoList not found');
        }
    } else {
        res.status(404).send('User not found');
    }
});

// Create todoItems
app.post('/users/:username/:listName/todoItem', (req, res) => {
    if (!req.params.username || !req.params.listName) {
        res.status(404).send('The username and the name of todoList are required')
    }
    const username = req.params.username;
    const listName = req.params.listName;
    const indexOfUser = users.findIndex(user => user.username == username)
    const user = users[indexOfUser]
    if (user) {
        const indexOfListName = user.todoLists.findIndex(todoList => todoList.listName === listName)
        const todoLists = user.todoLists[indexOfListName]
        if (todoLists) {
            const todoItemName = req.body.itemName;
            const todoItem = new TodoItem(todoItemName, todoLists)
            res.json(todoItem.toJSON())
        } else {
            res.status(404).send('Todolist not found')
        }
    } else {
        res.status(404).send('User not found')
    }
});

// update todoItems
app.put('/users/:username/:listName/:theItemName', (req, res) => {
    if (!req.params.username || !req.params.listName || !req.params.theItemName) {
        res.status(404).send('The username , the name of todoList and the Item name are required')
    }
    const username = req.params.username;
    const listName = req.params.listName;
    const nameofItem = req.params.theItemName;
    const indexOfUser = users.findIndex(user => user.username == username)
    const user = users[indexOfUser]
    if (user) {
        const indexOfListName = user.todoLists.findIndex(todoList => todoList.listName === listName)
        const todoLists = user.todoLists[indexOfListName]
        if (todoLists) {
            const indexOfItem = todoLists.todoItems.findIndex(todoItem => todoItem.description == nameofItem)
            const newTodoItem = req.body.itemName;
            todoLists.todoItems[indexOfItem].description = newTodoItem
            res.json(todoLists.todoItems)
        } else {
            res.status(404).send('Todolist not found')
        }
    } else {
        res.status(404).send('User not found')
    }
});

// Delete Item
app.delete('/users/:username/:listName/:theItemName', (req, res) => {
    if (!req.params.username || !req.params.listName || !req.params.theItemName) {
        res.status(404).send('The username , the name of todoList and the Item name are required')
    }
    const username = req.params.username;
    const listName = req.params.listName;
    const nameofItem = req.params.theItemName;
    const indexOfUser = users.findIndex(user => user.username == username)
    const user = users[indexOfUser]
    if (user) {
        const indexOfListName = user.todoLists.findIndex(todoList => todoList.listName === listName)
        const todoLists = user.todoLists[indexOfListName]
        if (todoLists) {
            const indexOfItem = todoLists.todoItems.findIndex(todoItem => todoItem.description == nameofItem)
            todoLists.deleteTodoItem(todoLists.todoItems[indexOfItem])
            res.json(todoLists.todoItems)
        } else {
            res.status(404).send('Todolist not found')
        }
    } else {
        res.status(404).send('User not found')
    }
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
export default app;


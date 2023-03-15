const request = require("supertest")
const baseURL = "http://localhost:3000"
//import app from "../src/index";


describe("GET / ", () => {
    test("It should respond with an array of students", async () => {
        const response = await request(baseURL).get("api/toDoList");
        expect(response.json).toEqual([
            {
                "userId": 1,
                "username": "Zakaria",
                "password": "123456789",
                "id": 1,
                "title": "App mit Typescripte",
                "description": "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.",
                "deadline": "03.03.2023",
                "created_at": "18.02.2023",
                "category": "Categorie 3",
                "complete": false
            },
            {
                "userId": 2,
                "username": "User 2",
                "password": "qwertzuiopü",
                "id": 1,
                "title": "App mit NodeJs",
                "description": "An essay planner template assists you with the help of providing easy-to-understand guidelines for writing an essay. These guidelines will help you map the content of the essay so you can get a kick start. There are a lot of ways these templates can be used, such as making notes of the main information such as numeric data, hyperlinks, and additional articles to include. These can be added as a reference within your I see and will help you as evidence to your main argument.",
                "deadline": "04.04.2023",
                "created_at": "01.01.2023",
                "category": "Categorie 2",
                "complete": false
            },
            {
                "userId": 3,
                "username": "User 3",
                "password": "987654321",
                "id": 1,
                "title": "App mit Javascripte",
                "description": "This will reduce the confusion in including data as you would know exactly what to add and what not to add. This will make the process very quick as well. The time constraint will be low because there won't be any kind of need for additional research as you will have all the things prepared before actually writing the essay.",
                "deadline": "13.03.2023",
                "created_at": "28.02.2023",
                "category": "Categorie 3",
                "complete": false
            }
        ]);
        expect(response.statusCode).toBe(200);
    });
});
/*
describe("GET /todos", () => {
    it("Hello API Request", async () => {
        const result = await request(baseURL).get("/api/toDoList");
        expect(result.json).toEqual([1,
            "Zakaria",
            "123456789",
            1,
            "App mit Typescripte", "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.",
            "03.03.2023",
            "18.02.2023",
            "Categorie 3"]);
        expect(result.statusCode).toEqual(200);
    });
});
*/
/* test("Get All", async () => {
    const res = await request(app).get("/api/toDoList");
    expect(res.body).toEqual([1,
        "Zakaria",
        "123456789",
        1,
        "App mit Typescripte", "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.",
        "03.03.2023",
        "18.02.2023",
        "Categorie 3"]);
});
})
;
*/
/*  describe("GET /todos", () => {
      const newTodo = {
          userId: 4,
          username: "Hamid",
          password: "w7d8wx48wx",
          id: 4,
          title: "some Title",
          description: "Diescription..............",
          deadline: "20-01-2020",
          created_at: "20-01-2020",
          category: "string",
          complete: true,
      }
      beforeAll(async () => {
          // set up the todo
          await request(baseURL).post("/api/toDoList").send(newTodo);
      })
      afterAll(async () => {
          await request(baseURL).delete(`/api/toDoList/${newTodo.id}`)
      })
      it("should return 200", async () => {
          const response = await request(baseURL).get("/api/toDoList");
          expect(response.statusCode).toBe(200);
          expect(response.body.data.length > 0).toBe(false);
      });
  });

  describe("POST /todo", () => {
      const newTodo = {
          // todo
          userId: 4,
          username: "Hamid",
          password: "w7d8wx48wx",
          id: 4,
          title: "some Title",
          description: "Diescription..............",
          deadline: "20-01-2020",
          created_at: "20-01-2020",
          category: "string",
          complete: true,
      }
      afterAll(async () => {
          await request(baseURL).delete(`/api/toDoList/${newTodo.id}`)
      })
      it("should add an item to todos array", async () => {
          const response = await request(baseURL).post("/api/toDoList").send(newTodo);
          const lastItem = response.body.data;
          // expect(response.statusCode).toBe(201);
          expect(lastItem.username).toBe(newTodo["username"]);
          expect(lastItem.complete).toBe(newTodo["complete"]);
      });
  });
**/
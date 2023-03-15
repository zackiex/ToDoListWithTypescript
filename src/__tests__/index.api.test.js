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
const request = require("supertest");
const baseURL = "http://localhost:3000";
//import app from "../src/index";
describe("GET / ", () => {
    test("It should respond with an array of students", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(baseURL).get("api/toDoList");
        expect(response.body).toEqual({
            userId: "1",
            username: "Zakaria",
            password: "123456789",
            id: "1",
            title: "App mit Typescripte",
            description: "TypeScript is an strongly typed, object-oriented programming language that is a superset of JavaScript. It is an open-source language developed and maintained by Microsoft. TypeScript can help developers write better, more reliable code by providing them with type checking and other features that help detect common mistakes. TypeScript also lets developers use powerful JavaScript features like classes and modules that weren't available before. Additionally, it makes JavaScript applications more scalable and maintainable.",
            deadline: "03.03.2023",
            created_at: "18.02.2023",
            category: "Categorie 3",
        });
        expect(response.statusCode).toBe(200);
    }));
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

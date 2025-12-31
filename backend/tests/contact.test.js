import request from "supertest";
import app from "../src/app.js";

describe("POST /api/contact", () => {
  it("should create contact", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Test",
      email: "test@mail.com",
      message: "This is a valid message"
    });

    expect(res.statusCode).toBe(201);
  });
});

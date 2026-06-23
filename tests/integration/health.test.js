const request = require("supertest");
const app = require("../../src/app");

describe("Health API", () => {
  test("GET /health returns 200", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject({
      success: true,
      status: "UP"
    });
  });
});
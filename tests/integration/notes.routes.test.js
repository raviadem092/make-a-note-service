jest.mock("../../src/models/noteModel");

const request = require("supertest");
const app = require("../../src/app");

const noteModel =
  require("../../src/models/noteModel");

describe("Notes Routes", () => {

  test("GET /api/v1/notes", async () => {

    noteModel.getAllNotes.mockResolvedValue([
      {
        id: 1,
        title: "Test Note"
      }
    ]);

    const response =
      await request(app)
        .get("/api/v1/notes");

    expect(response.statusCode)
      .toBe(200);

    expect(response.body.success)
      .toBe(true);
  });

});
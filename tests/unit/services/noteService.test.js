jest.mock("../../../src/models/noteModel");

const noteModel =
  require("../../../src/models/noteModel");

const noteService =
  require("../../../src/services/noteService");

describe("Note Service", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return all notes", async () => {

    const notes = [
      { id: 1, title: "Note 1" }
    ];

    noteModel.getAllNotes
      .mockResolvedValue(notes);

    const result =
      await noteService.getAllNotes();

    expect(result).toEqual(notes);
  });

});
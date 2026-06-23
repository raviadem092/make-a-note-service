const noteService = require("../services/noteService");
const { successResponse } = require("../utils/responseHandler");
const { HTTP_STATUS, RESPONSE_MESSAGES } = require("../utils/constants");
const asyncHandler = require("../utils/asyncHandler");

const getAllNotes = asyncHandler(
  async (req, res) => {
    const notes =
      await noteService.getAllNotes();

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTES_FETCHED,
      notes
    );
  }
);

const getNote = asyncHandler(
  async (req, res) => {
    const note =
      await noteService.getNote(
        req.params.id
      );

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTE_FETCHED,
      note
    );
  }
);

const createNote = asyncHandler(
  async (req, res) => {
    const note =
      await noteService.createNote(
        req.body.title
      );

    return successResponse(
      res,
      HTTP_STATUS.CREATED,
      RESPONSE_MESSAGES.NOTE_CREATED,
      note
    );
  }
);

const updateNote = asyncHandler(
  async (req, res) => {
    const note =
      await noteService.updateNote(
        req.params.id,
        req.body.title
      );

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTE_UPDATED,
      note
    );
  }
);

const deleteNote = asyncHandler(
  async (req, res) => {
    await noteService.deleteNote(
      req.params.id
    );

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTE_DELETED
    );
  }
);

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
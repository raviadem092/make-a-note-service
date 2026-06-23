const noteService = require("../services/noteService");

const {
  successResponse,
} = require("../utils/responseHandler");

const {
  HTTP_STATUS,
  RESPONSE_MESSAGES,
} = require("../utils/constants");

const getAllNotes = async (req, res, next) => {
  try {
    const notes = await noteService.getAllNotes();

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTES_FETCHED,
      notes
    );
  } catch (error) {
    next(error);
  }
};

const getNote = async (req, res, next) => {
  try {
    const note = await noteService.getNote(
      req.params.id
    );

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTE_FETCHED,
      note
    );
  } catch (error) {
    next(error);
  }
};

const createNote = async (req, res, next) => {
  try {
    const note = await noteService.createNote(
      req.body.title
    );

    return successResponse(
      res,
      HTTP_STATUS.CREATED,
      RESPONSE_MESSAGES.NOTE_CREATED,
      note
    );
  } catch (error) {
    next(error);
  }
};

const updateNote = async (req, res, next) => {
  try {
    const note = await noteService.updateNote(
      req.params.id,
      req.body.title
    );

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTE_UPDATED,
      note
    );
  } catch (error) {
    next(error);
  }
};

const deleteNote = async (req, res, next) => {
  try {
    await noteService.deleteNote(
      req.params.id
    );

    return successResponse(
      res,
      HTTP_STATUS.OK,
      RESPONSE_MESSAGES.NOTE_DELETED
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
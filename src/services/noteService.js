const noteModel = require("../models/noteModel");

const AppError = require("../utils/AppError");

const {
  validateTitle,
} = require("../utils/validations");

const {
  HTTP_STATUS,
  RESPONSE_MESSAGES,
} = require("../utils/constants");

const getAllNotes = async () => {
  return await noteModel.getAllNotes();
};

const getNote = async (id) => {
  const note = await noteModel.getNote(id);

  if (!note) {
    throw new AppError(
      RESPONSE_MESSAGES.NOTE_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  return note;
};

const createNote = async (title) => {
  const validationError =
    validateTitle(title);

  if (validationError) {
    throw new AppError(
      validationError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  return await noteModel.createNote(title);
};

const updateNote = async (
  id,
  title
) => {
  const validationError =
    validateTitle(title);

  if (validationError) {
    throw new AppError(
      validationError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  const existingNote =
    await noteModel.getNote(id);

  if (!existingNote) {
    throw new AppError(
      RESPONSE_MESSAGES.NOTE_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  return await noteModel.updateNote(
    id,
    title
  );
};

const deleteNote = async (id) => {
  const existingNote =
    await noteModel.getNote(id);

  if (!existingNote) {
    throw new AppError(
      RESPONSE_MESSAGES.NOTE_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  return await noteModel.deleteNote(id);
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
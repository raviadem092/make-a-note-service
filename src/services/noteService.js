const noteModel = require("../models/noteModel");
const AppError = require("../utils/AppError");
const { validateTitle, validateId, } = require("../utils/validations");
const { HTTP_STATUS, RESPONSE_MESSAGES } = require("../utils/constants");

const getAllNotes = async () => {
  try {
    return await noteModel.getAllNotes();
  } catch (error) {
    throw new AppError(
      RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

const getNote = async (id) => {
  const idError = validateId(id);

  if (idError) {
    throw new AppError(
      idError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  try {
    const note = await noteModel.getNoteById(id);

    if (!note) {
      throw new AppError(
        RESPONSE_MESSAGES.NOTE_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }

    return note;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(
      RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

const createNote = async (title) => {
  const validationError = validateTitle(title);

  if (validationError) {
    throw new AppError(
      validationError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  try {
    return await noteModel.createNote(
      title.trim()
    );
  } catch (error) {
    throw new AppError(
      RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

const updateNote = async (
  id,
  title
) => {
  const idError = validateId(id);

  if (idError) {
    throw new AppError(
      idError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  const titleError = validateTitle(title);

  if (titleError) {
    throw new AppError(
      titleError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  try {
    const updatedNote =
      await noteModel.updateNote(
        id,
        title.trim()
      );

    if (!updatedNote) {
      throw new AppError(
        RESPONSE_MESSAGES.NOTE_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }

    return updatedNote;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(
      RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

const deleteNote = async (id) => {
  const idError = validateId(id);

  if (idError) {
    throw new AppError(
      idError,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  try {
    const deleted =
      await noteModel.deleteNote(id);

    if (!deleted) {
      throw new AppError(
        RESPONSE_MESSAGES.NOTE_NOT_FOUND,
        HTTP_STATUS.NOT_FOUND
      );
    }

    return deleted;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(
      RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
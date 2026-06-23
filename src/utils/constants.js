const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,

  SERVER_ERROR: 500,
});

const RESPONSE_MESSAGES = Object.freeze({
  NOTE_CREATED: "Note created successfully",
  NOTE_UPDATED: "Note updated successfully",
  NOTE_DELETED: "Note deleted successfully",

  NOTE_NOT_FOUND: "Note not found",

  TITLE_REQUIRED: "Title is required",
  TITLE_INVALID: "Title is invalid",

  ROUTE_NOT_FOUND: "Route not found",

  INTERNAL_SERVER_ERROR: "Internal server error",
  NOTES_FETCHED: "Notes fetched successfully",
  NOTE_FETCHED: "Note fetched successfully",
});

const API = Object.freeze({
  PREFIX: "/api/v1",
});

module.exports = {
  HTTP_STATUS,
  RESPONSE_MESSAGES,
  API,
};
const db = require("../config/db");

const getAllNotes = async () => {
  const [rows] = await db.query(
    `SELECT *
     FROM notes
     ORDER BY id DESC`
  );

  return rows;
};

const getNote = async (id) => {
  const [rows] = await db.query(
    `SELECT *
     FROM notes
     WHERE id = ?`,
    [id]
  );

  return rows[0] || null;
};

const createNote = async (title) => {
  const [result] = await db.query(
    `INSERT INTO notes (title)
     VALUES (?)`,
    [title]
  );

  return await getNote(result.insertId);
};

const updateNote = async (
  id,
  title
) => {
  await db.query(
    `UPDATE notes
     SET title = ?
     WHERE id = ?`,
    [title, id]
  );

  return await getNote(id);
};

const deleteNote = async (id) => {
  const note = await getNote(id);

  await db.query(
    `DELETE FROM notes
     WHERE id = ?`,
    [id]
  );

  return note;
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
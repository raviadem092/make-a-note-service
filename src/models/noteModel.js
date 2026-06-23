const db = require("../config/db");
const logger = require("../utils/logger");
const getAllNotes = async () => {
    try {
        const [rows] = await db.query(
            `
            SELECT id, title, created_at, updated_at
            FROM notes
            ORDER BY id DESC
            `
        );

        return rows;
    } catch (error) {
        logger.error("NotesRepository.getAllNotes", {
            message: error.message,
            stack: error.stack,
        });

        throw error;
    }
};

const getNoteById = async (id) => {
    try {
        const [rows] = await db.query(
            `
            SELECT id, title, created_at, updated_at
            FROM notes
            WHERE id = ?
            LIMIT 1
            `,
            [id]
        );

        return rows.length ? rows[0] : null;
    } catch (error) {
        logger.error("NotesRepository.getNoteById", {
            id,
            message: error.message,
            stack: error.stack,
        });

        throw error;
    }
};

const createNote = async (title) => {
    try {
        const [result] = await db.query(
            `
            INSERT INTO notes (title)
            VALUES (?)
            `,
            [title.trim()]
        );

        return {
            id: result.insertId,
            title: title.trim(),
        };
    } catch (error) {
        logger.error("NotesRepository.createNote", {
            title,
            message: error.message,
            stack: error.stack,
        });

        throw error;
    }
};

const updateNote = async (id, title) => {
    try {
        const [result] = await db.query(
            `
            UPDATE notes
            SET title = ?
            WHERE id = ?
            `,
            [title.trim(), id]
        );

        if (result.affectedRows === 0) {
            return null;
        }

        return await getNoteById(id);
    } catch (error) {
        logger.error("NotesRepository.updateNote", {
            id,
            title,
            message: error.message,
            stack: error.stack,
        });

        throw error;
    }
};

const deleteNote = async (id) => {
    try {
        const [result] = await db.query(
            `
            DELETE FROM notes
            WHERE id = ?
            `,
            [id]
        );

        return result.affectedRows > 0;
    } catch (error) {
        logger.error("NotesRepository.deleteNote", {
            id,
            message: error.message,
            stack: error.stack,
        });

        throw error;
    }
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
};
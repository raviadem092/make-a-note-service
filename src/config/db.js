const mysql = require("mysql2/promise");
const logger = require("../utils/logger");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  ssl: {
    rejectUnauthorized: false,
  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const makeConnection = async () => {
  try {
    const connection = await pool.getConnection();
    logger.info("Database Connected Successfully...");
    connection.release();
  } catch (error) {
    logger.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== "test") {
  makeConnection();
}

module.exports = {
  pool,
  makeConnection
};
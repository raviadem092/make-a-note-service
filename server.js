const dotenv = require("dotenv");

dotenv.config({
    quiet: true
});

const app = require("./src/app");
const logger = require("./src/utils/logger");

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    logger.info("Make A Note Service Running", {
        port: PORT,
        environment: process.env.NODE_ENV || "development"
    });
    console.log(`Make A Note Service Running...`);
});

server.on("error", (error) => {
    logger.error("Server startup failed", {
        message: error.message,
        stack: error.stack
    });
    process.exit(1);
});

process.on("SIGINT", () => {
    logger.info("Shutting down server");
    process.exit(0);
});

process.on("SIGTERM", () => {
    logger.info("Server terminated");
    process.exit(0);
});
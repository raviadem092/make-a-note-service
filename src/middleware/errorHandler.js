const logger = require("../utils/logger");
const { HTTP_STATUS, RESPONSE_MESSAGES } = require("../utils/constants");

const errorHandler = (err, req, res, next) => {

    logger.error(
        `${req.method} ${req.originalUrl} | ${err.stack || err.message}`
    );

    const statusCode =
        err.statusCode ||
        HTTP_STATUS.INTERNAL_SERVER_ERROR;

    const message =
        statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR
            ? RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
            : err.message;

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV == "development" && {
            stack: err.stack
        })
    });
};

module.exports = errorHandler;
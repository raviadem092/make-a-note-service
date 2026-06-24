const express = require("express");
const cors = require("cors");

const noteRoutes = require("./routes/noteRoutes");

const requestLogger = require("./middleware/requestLogger");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");

const { HTTP_STATUS } = require("./utils/constants");

const app = express();

const API_PREFIX = "/api/v1";

app.use(cors(
    {
        origin: process.env.FRONT_END_URL,
        credentials: true
    }
));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(requestLogger);

app.get("/health", (req, res) => {
    res.status(HTTP_STATUS.OK).json({
        success: true,
        status: "UP",
        timestamp: new Date().toISOString()
    });
});

app.use( `${API_PREFIX}/notes`, noteRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
const { HTTP_STATUS } = require("../utils/constants");
const { RESPONSE_MESSAGES } = require("../utils/constants");

module.exports = (req, res) => {
    res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: RESPONSE_MESSAGES.ROUTE_NOT_FOUND,
        path: req.originalUrl,
        method: req.method
    });
};
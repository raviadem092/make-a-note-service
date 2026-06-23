const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const path = require("path");
const fs = require("fs");

const logDirectory = path.join(process.cwd(), "logs");

const applicationLogDir = path.join(
    logDirectory,
    "application"
);

const errorLogDir = path.join(
    logDirectory,
    "error"
);

const exceptionLogDir = path.join(
    logDirectory,
    "exception"
);

const rejectionLogDir = path.join(
    logDirectory,
    "rejection"
);

[
    logDirectory,
    applicationLogDir,
    errorLogDir,
    exceptionLogDir,
    rejectionLogDir
].forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
});

const fileFormat = winston.format.combine(
    winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.errors({
        stack: true
    }),
    winston.format.printf(
        ({
            timestamp,
            level,
            message,
            stack,
            ...meta
        }) => {
            const metadata =
                Object.keys(meta).length > 0
                    ? ` ${JSON.stringify(meta)}`
                    : "";

            return `${timestamp} [${level.toUpperCase()}] ${
                stack || message
            }${metadata}`;
        }
    )
);

const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
        format: "HH:mm:ss"
    }),
    winston.format.printf(
        ({
            timestamp,
            level,
            message,
            stack,
            ...meta
        }) => {
            const metadata =
                Object.keys(meta).length > 0
                    ? ` ${JSON.stringify(meta)}`
                    : "";

            return `${timestamp} [${level}] ${
                stack || message
            }${metadata}`;
        }
    )
);

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",

    transports: [
        // to print logs in console
        // new winston.transports.Console({
        //     format: consoleFormat,
        //     handleExceptions: true
        // }),

        new DailyRotateFile({
            filename: path.join(
                applicationLogDir,
                "app-%DATE%.log"
            ),
            datePattern: "YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "14d",
            format: fileFormat
        }),

        new DailyRotateFile({
            filename: path.join(
                errorLogDir,
                "error-%DATE%.log"
            ),
            level: "error",
            datePattern: "YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "30d",
            format: fileFormat
        })
    ],

    exceptionHandlers: [
        new DailyRotateFile({
            filename: path.join(
                exceptionLogDir,
                "exceptions-%DATE%.log"
            ),
            datePattern: "YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "30d",
            format: fileFormat
        })
    ],

    rejectionHandlers: [
        new DailyRotateFile({
            filename: path.join(
                rejectionLogDir,
                "rejections-%DATE%.log"
            ),
            datePattern: "YYYY-MM-DD",
            maxSize: "20m",
            maxFiles: "30d",
            format: fileFormat
        })
    ],

    exitOnError: false
});

module.exports = logger;
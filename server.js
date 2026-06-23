require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`
=================================
 Make A Note Service Running
 Port : ${PORT}
 Environment : ${process.env.NODE_ENV || "development"}
=================================
`);
});

server.on("error", (error) => {
    console.error("Server startup failed:", error.message);
    process.exit(1);
});

process.on("SIGINT", () => {
    console.log("Shutting down server...");
    process.exit(0);
});

process.on("SIGTERM", () => {
    console.log("Server terminated");
    process.exit(0);
});
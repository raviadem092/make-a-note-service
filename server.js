const dotenv = require("dotenv");
dotenv.config({ quiet: true });
const app = require("./src/app");
const logger = require("./src/utils/logger");
const { makeConnection } = require("./src/config/db");
const PORT = process.env.PORT || 5000;
(async () => {
  try {
    await makeConnection();
    const server = app.listen(PORT, () => {
      logger.info(
        "Make A Note Service Running",
        {
          port: PORT,
          environment: process.env.NODE_ENV || "development"
        }
      );
      console.log(
        "Make A Note Service Running..."
      );
    });
    server.on("error", (error) => {
      logger.error("Server startup failed", {
        message: error.message,
        stack: error.stack
      });

      process.exit(1);
    });

  } catch (error) {
    process.exit(1);
  }
})();
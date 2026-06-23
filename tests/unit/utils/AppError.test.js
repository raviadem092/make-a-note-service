const AppError = require("../../../src/utils/AppError");

describe("AppError", () => {
  test("should create custom error", () => {
    const error = new AppError("Not Found", 404);

    expect(error.message).toBe("Not Found");
    expect(error.statusCode).toBe(404);
  });
});
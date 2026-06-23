const errorHandler =
  require("../../../src/middleware/errorHandler");

describe("errorHandler", () => {

  test("should return error response", () => {

    const err = {
      message: "Something went wrong",
      statusCode: 500
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    errorHandler(err, {}, res, jest.fn());

    expect(res.status)
      .toHaveBeenCalledWith(500);
  });

});
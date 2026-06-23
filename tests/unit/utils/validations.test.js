const {
  validateTitle,
  validateId
} = require("../../../src/utils/validations");

describe("Validation Utils", () => {

  test("should reject empty title", () => {
    expect(validateTitle(""))
      .toBeTruthy();
  });

  test("should accept valid title", () => {
    expect(validateTitle("My Note"))
      .toBeNull();
  });

  test("should reject invalid id", () => {
    expect(validateId("abc"))
      .toBeTruthy();
  });

  test("should accept valid id", () => {
    expect(validateId(1))
      .toBeNull();
  });

});
module.exports = {
  testEnvironment: "node",

  collectCoverage: true,
  coverageDirectory: "coverage",

  setupFilesAfterEnv: [
    "<rootDir>/tests/setup.js"
  ],

  collectCoverageFrom: [
    "src/**/*.js"
  ],

  reporters: [
    "default",
    "jest-junit"
  ],

  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};
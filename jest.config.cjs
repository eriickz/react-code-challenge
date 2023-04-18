/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@global/(.*)$": "<rootDir>/src/global/$1",
    "^@components/(.*)$": "<rootDir>/src/global/components/$1",
  },
}

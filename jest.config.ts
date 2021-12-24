/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    coverageProvider: "v8",
    bail: true,
    clearMocks: true,
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [
        "**/*.spec.ts"
    ],
};

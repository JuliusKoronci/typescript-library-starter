module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    '!src/**/*.d.ts',
    '!src/**/*.stories.{tsx,jsx}',
    '!src/**/types.ts',
    '!src/setupTests.ts',
    'src/**/*.{ts,tsx,js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '.*.stories.*$',
  ],
};

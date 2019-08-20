const coveragePathIgnorePatterns = ['src/assets/*', 'src/index.tsx']

const coverageSection = {
  coveragePathIgnorePatterns,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.tsx', 'src/**/*.jsx', '!src/**/*.e2e.js'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
}

const moduleSection = {
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/mocks/styleMock.js',
    '\\.(jpg|gif|ttf|eot|svg)$': '<rootDir>/config/mocks/fileMock.js',
  },
  moduleFileExtensions: ['tsx', 'css', 'scss', 'js', 'json', 'jsx'],
}

module.exports = {
  rootDir: '../../',
  testURL: 'http://localhost/',
  globals: {
    __SERVER__: false,
    window: {},
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  ...moduleSection,
  ...coverageSection,
}

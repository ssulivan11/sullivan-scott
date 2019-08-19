const coveragePathIgnorePatterns = ['src/assets/*', 'src/index.tsx']

const config = {
  rootDir: '../../',
  testURL: 'http://localhost/',
  globals: {
    __SERVER__: false,
    window: {},
  },
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/mocks/styleMock.js',
    '\\.(jpg|gif|ttf|eot|svg)$': '<rootDir>/config/mocks/fileMock.js',
  },
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.tsx', 'src/**/*.jsx', '!src/**/*.e2e.js'],
  coveragePathIgnorePatterns,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  moduleFileExtensions: ['ts', 'tsx', 'css', 'scss', 'js', 'json', 'jsx'],
  coverageDirectory: '<rootDir>/reports/coverage',
}

module.exports = config

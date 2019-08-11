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
      statements: 65,
      branches: 61,
      functions: 57,
      lines: 56,
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  moduleFileExtensions: ['tsx', 'css', 'scss', 'js', 'json', 'jsx'],
  coverageDirectory: '<rootDir>/reports/coverage',
}

module.exports = config

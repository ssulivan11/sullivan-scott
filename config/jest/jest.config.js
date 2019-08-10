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
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  moduleFileExtensions: ['tsx', 'css', 'scss', 'js', 'json', 'jsx'],
}

module.exports = config

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/setUpTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/setUpTests.js',
    '\\.(css|less)$': '<rootDir>/config/setUpTests.js',
  },
};

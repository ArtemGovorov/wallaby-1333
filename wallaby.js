module.exports = wallaby => {
  return {
    files: [
      'app/**/*.js',
      'app/**/*.snap',
      '!app/**/*.test.js',
    ],

    tests: ['app/**/*.test.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest'
  };
};

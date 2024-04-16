module.exports = {
  input: 'src/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  server: {
    port: 8081
  },
  polyfills: {
    buffer: true,
    crypto: true,
  }
};

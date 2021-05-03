const pathResolve = require('path').resolve;
const url = require('url');
const publicPath = '/vast/';

module.exports = () => ({
  devServer: {
    host: 'localhost',
    disableHostCheck: true,
    port: 8080,
    open: true,
    historyApiFallback: {
      index: url.parse(publicPath).pathname,
    },
    contentBase: pathResolve('./src/assets'),
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
});

const pathResolve = require('path').resolve;
const url = require('url');
const publicPath = '/vast/';

module.exports = () => ({
  devServer: {
    host: 'kholobok.biz',
    // host: 'localhost',
    disableHostCheck: true,
    // port: 80,
    open: true,
    https: true,
    port: 443,
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

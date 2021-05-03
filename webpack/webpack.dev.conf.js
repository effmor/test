const webpack = require('webpack');
const path = require('path');
const publicPath = 'vast';

module.exports = () => ({
  output: {
    path: path.resolve(__dirname, `../${publicPath}`),
    filename: '[name].js',
    publicPath: `/${publicPath}/`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

const CopyPlugin = require('copy-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    'root-application': 'src/root-application/single-spa-config.js',

  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  optimization: {
    splitChunks: {
      name: 'common-dependencies.js',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'index.html'), to: path.join(__dirname, 'dist')},
        { from: path.join(__dirname, 'src/ember-quickstart/dist/assets/ember-quickstart.js'), to: path.join(__dirname, 'dist')},
        { from: path.join(__dirname, 'src/ember-quickstart/dist/assets/vendor.js'), to: path.join(__dirname, 'dist')},
      ],
    }),
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk:true,
    hot: true, //Hot module replacement
  }
};
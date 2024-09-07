const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      title: 'What\'s the weather?',
      scriptLoading: 'defer',
      inject: 'head'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      }
    ]
  }
}
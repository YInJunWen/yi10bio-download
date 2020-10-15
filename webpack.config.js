const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production', // 模式配置
  entry: './src/index.js', // 入口文件
  output: {
    publicPath: './',
    filename: 'bundle.[hash:16].js', // 打包后的文件名称
    path: path.resolve(__dirname, 'dist') // 打包后的目录，必须是绝对路径
  }, // 出口文件
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[hash:8].[name].[ext]',
          outputPath: 'images/'
        }
      }
    ]
  }, // 处理对应模块
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:16].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true // 会在打包好的bundle.js后面加上hash串
    })
  ], // 对应的插件
  devServer: {} // 开发服务器配置
}

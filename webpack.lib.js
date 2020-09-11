// 打包组件库
const path = require('path')
const { dirname } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
module.exports ={
  entry:{
    'largeNumber':path.resolve(__dirname,'./src/largeNumber/index.js'),
    'largeNumber.min':path.resolve(__dirname,'./src/largeNumber/index.js'),
  },
  output:{
    filename:'[name].js',
    library:'largeNumber',
    libraryExport:'default',
    libraryTarget:'umd',
    path:path.resolve(__dirname,'./dist')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  }
}
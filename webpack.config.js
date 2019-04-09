const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPages = ['index'];

let htmlPlugins = htmlPages.map(page => 
   new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `assets/${page}.html`,
   })
);

module.exports = {
   entry: './assets/js/script.js',
   output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.[chunkhash].js'
      // publicPath: '/'
   },
   module: {
      rules: [{
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                  loader: 'url-loader',
                  options: {
                     limit: 40000,
                     outputPath: './images'
                  }
               },
               'image-webpack-loader'
            ]
         },
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               use: [{
                  loader: 'css-loader',
                  options: {
                     url: false
                  }
               }, {
                  loader: 'postcss-loader'
               }]
            })
         },
         {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: {
               loader: 'file-loader',
               options: {
                  outputPath: 'css/fonts',
                  name: '[name].[ext]',
               },
            }
         },
         {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ]
   },

   plugins: [
      new ExtractTextPlugin('css/style.[hash].css'),
      ...htmlPlugins
   ],
   devServer: {
      contentBase: 'dist'
   }
}
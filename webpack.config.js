let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
    entry:'./assets/js/script.js',
    output:{
    path: path.join(__dirname, './dist'),
    filename:'bundle.[chunkhash].js'
    },
    module:{
        rule:[{
            test:/\.(js)$/,
            exclude:/(node_modules)/,
            use:{
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
            }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            use:[
                {
            loader:'url-loader',
            options:{
                limit:1000,
                outputPath:'./image'
            }
                },
                'image-webpack-loader'
            ]
        },
        {
           test: /\.css$/,
           use: ExtractTextPlugin.extract({
                              use: [{
                loader:'css-loader',
                options:{
                      url:false
                }
            },
            {
                loader:'postcss-losder'
            }]
                       })
        }	
               ]
        },
       plugins: [
              new ExtractTextPlugin('./css/style.css')
        ]
          };
   

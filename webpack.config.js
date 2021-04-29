const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
   const configFile = require('./config/development.json');
   const DEV_SERVER_PORT = 4444;

   const baseUrl = configFile && configFile.BASE_URL;
   const appUrl = configFile && configFile.APP_URL;
   const distPath = path.resolve(__dirname, 'dist');

   console.log('\x1b[36m%s\x1b[0m', 'Building for development...');

   return {
      entry: ['react-hot-loader/patch', './src/index.tsx'],
      output: {
         filename: 'bundle.js',
         path: distPath,
         publicPath: distPath,
      },
      optimization: {
         minimize: false,
         nodeEnv: 'development',
      },
      plugins: [
         new HtmlWebPackPlugin({
            title: 'React Base Template',
            template: './index.html',
            filename: './index.html',
            favicon: './src/favicon.png',
         }),
         new webpack.HotModuleReplacementPlugin(),
         new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
         new webpack.SourceMapDevToolPlugin(),
      ],
      devtool: 'inline-source-map',
      module: {
         rules: [{
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: [{
               loader: 'babel-loader',
               options: {
                  presets: [
                     ['@babel/preset-env', {
                        targets: 'defaults',
                     }],
                     '@babel/preset-react',
                  ],
               },
            }],
         }, {
            test: /\.(ts|tsx)?$/,
            loader: 'awesome-typescript-loader',
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
         }],
      },
      // resolve for absolute imports
      resolve: {
         extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
         alias: {
            src: path.resolve(__dirname, 'src'),
            node_modules: path.resolve(__dirname, 'node_modules'),
            'react-dom': '@hot-loader/react-dom'
         },
         symlinks: false,
      },
      devServer: {
         host: 'localhost',
         port: DEV_SERVER_PORT,
         hot: true,
      },
   };
};

const webpack = require('webpack');
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
// ToDo: Clean production folder before building new files
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
   const { mode } = argv;
   const { platform } = env || '';

   const configFile = require(`./config/${platform || 'development'}.json`);
   const DEV_SERVER_PORT = 4444;

   const baseUrl = configFile && configFile.BASE_URL;
   const appUrl = configFile && configFile.APP_URL;
   const rootPath = path.resolve(__dirname, 'dist');

   let optimization;
   let output;
   const plugins = [
      new HtmlWebPackPlugin({
         title: 'React Base Template',
         template: './src/index.html',
         favicon: './src/favicon.png'
      }),
      new webpack.SourceMapDevToolPlugin(),
   ];

   if (platform === 'production') {
      optimization = {
         minimize: true,
         nodeEnv: 'production',
         splitChunks: { chunks: 'all' },
         runtimeChunk: true,
         namedModules: true,
         namedChunks: true,
      };
      output = {
         path: rootPath,
            filename: 'bundle.js'
      }
      plugins.push(new webpack.HotModuleReplacementPlugin());
   }

   if (platform === 'development') {
      optimization = {
         minimize: false,
         nodeEnv: 'development',
      };
      output = {
         filename: '[hash:8].bundle.js',
         chunkFilename: '[chunkhash:8].bundle.js',
         path: rootPath,
         publicPath: baseUrl,
      };
      plugins.push(
         new CleanWebpackPlugin(),
         new webpack.HashedModuleIdsPlugin(),
      );
   }

   return {
      entry: path.resolve(__dirname, 'src', 'index.js'),
      output,
      optimization,
      plugins,
      module: {
         rules: [{
            test: /\.(jsx|js)$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
               loader: 'babel-loader',
               options: {
                  presets: [
                     ['@babel/preset-env', {
                        "targets": "defaults"
                     }],
                  '@babel/preset-react'
                  ]
               }
            }]
         }]
      },
      // resolve for absolute imports
      resolve: {
         extensions: ['.jsx', '.js'],
         modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
         ],
         symlinks: false,
      },
      devServer: {
         host: 'localhost',
         inline: true,
         port: DEV_SERVER_PORT,
         contentBase: path.join(__dirname, 'dist'),
         publicPath: `${appUrl + baseUrl}`,
         historyApiFallback: true,
         hot: true,
         watchOptions: {
            watch: true,
         }
      },
   }
}

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
   const { platform } = env || '';

   // eslint-disable-next-line global-require
   const configFile = require(`./config/${platform || 'development'}.json`);

   const baseUrl = configFile && configFile.BASE_URL;
   const distPath = path.resolve(__dirname, 'dist');

   let optimization;
   let output;
   const plugins = [
      new HtmlWebPackPlugin({
         title: 'React Base Template',
         template: './index.html',
         filename: './index.html',
         favicon: './src/favicon.png',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new webpack.SourceMapDevToolPlugin(),
   ];

   optimization = {
      minimize: true,
      nodeEnv: 'production',
      splitChunks: { chunks: 'all' },
      runtimeChunk: true,
      namedModules: true,
      namedChunks: true,
   };
   output = {
      filename: '[hash:8].bundle.js',
      chunkFilename: '[chunkhash:8].bundle.js',
      path: distPath,
      publicPath: baseUrl,
   };
   plugins.push(
      new CleanWebpackPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
   );

   return {
      entry: ['react-hot-loader/patch', './src/index.tsx'],
      output,
      optimization,
      plugins,
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
   };
};

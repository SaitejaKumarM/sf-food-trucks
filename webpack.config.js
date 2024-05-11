const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development';

const commonPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(__DEV__ ? 'development' : 'production'),
    },
    __DEV__: JSON.stringify(__DEV__),
  }),
  new CleanWebpackPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: __DEV__ ? '[name].[contenthash].map' : '[name].[chunkhash].map',
    exclude: /^vender/,
  }),
];

const devPlugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true,
    options: {
      context: '/',
    },
  }),
];

const prodPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
      context: '/',
    },
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[name].[contenthash:8].css',
  }),
  new CssMinimizerPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'public/*',
        to: '',
      },
    ],
  }),
];

const htmlPlugin = new HtmlWebpackPlugin({
  filename: __DEV__ ? 'index.html' : 'index.hbs',
  template: 'src/index.hbs',
  chunks: ['main', 'vender'],
});

module.exports = {
  mode: __DEV__ ? 'development' : 'production',
  entry: __DEV__
    ? {
        main: [
          'react-hot-loader/patch',
          'webpack-dev-server/client?http://0.0.0.0',
          './src/index.js',
        ],
      }
    : {
        main: './src/index.js',
      },
  output: {
    filename: __DEV__ ? '[name].[contenthash:8].js' : '[name].[chunkhash].js',
    sourceMapFilename: __DEV__
      ? '[name].[contenthash:8].map'
      : '[name].[chunkhash].map',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: path.resolve(__dirname, `./dist`),
    publicPath: '/',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: require.resolve('postcss-loader') },
          'less-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/public',
    },
    compress: true,
    port: 8080,
    open: true,
  },
  plugins: __DEV__
    ? [...commonPlugins, ...devPlugins, htmlPlugin]
    : [...commonPlugins, ...prodPlugins, htmlPlugin],
  optimization: __DEV__
    ? {}
    : {
        moduleIds: 'deterministic',
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
            minify: TerserPlugin.swcMinify,
          }),
        ],
        splitChunks: {
          cacheGroups: {
            vender: {
              name: 'vender',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 0,
            },
            common: {
              name: 'common',
              chunks: 'all',
              minSize: 0,
              minChunks: 2,
              priority: -10,
            },
          },
        },
      },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};

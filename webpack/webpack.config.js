const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserConfig = {
  name: 'client',
  entry: {
    bundle: path.join(process.cwd(), 'client/index.tsx'),
  },
  output: {
    path: path.join(process.cwd(), 'public/client_dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  mode: process.env.NODE_ENV || 'development',
  watch: process.env.NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /server/,
          /client_dist/,
          /server_dist/,
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(process.cwd(), 'static'), to: path.join(process.cwd(), 'public/client_dist/static') },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Neti-test',
      filename: path.join(process.cwd(), 'public/index.html'),
      template: path.join(process.cwd(), 'client/index.html'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

const serverConfig = {
  name: 'server',
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  watch: process.env.NODE_ENV === 'development',
  entry: {
    server: path.join(process.cwd(), 'server/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), 'public/server_dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // include: [/server/],
        exclude: [
          /node_modules/,
          /client/,
          /client_dist/,
          /server_dist/,
        ],
        loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        include: [/server/],
        exclude: [
          /node_modules/,
          /client/,
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css|ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'ignore-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.css',
    ],
  },
};

// module.exports = [browserConfig];
module.exports = [browserConfig, serverConfig];

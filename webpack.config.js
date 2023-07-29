// Generated using webpack-cli https://github.com/webpack/webpack-cli

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PugPlugin = require('pug-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    index: './src/index.pug',
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    // filename: 'main.[contenthash:8].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: {
      paths: ['public', 'src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    open: {
      app: {
        name: 'L:/programs/GoogleChromePortable64/GoogleChromePortable.exe',
      },
    },
    host: 'localhost',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    // template: path.join(__dirname, 'public/index.html'),
    // }),
    // new MiniCssExtractPlugin({
    // filename: '[name].[contenthash:8].css',
    // }),
    new PugPlugin({
      js: {
        filename: '[name].[contenthash:8].js',
      },
      css: {
        filename: '[name].[contenthash:8].css',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [/* stylesHandler */ 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [/* stylesHandler */ 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][contenthash:8][ext]',
        },
      },
      {
        test: /\.(png|jpg|gif|webp|avif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][contenthash:8][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};

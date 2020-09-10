const path = require ('path');
const rootPath = path.resolve (__dirname, '../');
const srcPath = path.resolve (__dirname, '../');
const webpack = require ('webpack');
const envSet = require (`../env.${process.env.NODE_ENV}.js`);

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': srcPath,
      '~': rootPath,
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new webpack.DefinePlugin ({
      'process.env.FIREBASE_CONFIG': JSON.stringify (envSet.FIREBASE_CONFIG),
    }),
  ],
};

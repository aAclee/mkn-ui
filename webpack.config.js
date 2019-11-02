const path = require('path');

const isProduction = process.env.NODE_ENV === 'production'
console.log(path.resolve(__dirname, 'node_modules'))

module.exports = {
  mode: 'development',

  entry: {
    client: './client/src/index.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'client/src/components'),
      '@hooks': path.resolve(__dirname, 'client/src/hooks'),
      '@store': path.resolve(__dirname, 'client/src/store'),
      '@util': path.resolve(__dirname, 'client/lib/util'),
    }
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
};
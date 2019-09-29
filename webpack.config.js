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
    extensions: ['.ts', '.tsx', '.js']
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
        // use: [
        //   { loader: 'style-loader' },
        //   {
        //     loader: 'css-loader',
        //     // options: {
        //     //   discardDuplicates: true,
        //     //   importLoaders: 1,
        //     //   // This enables local scoped CSS based in CSS Modules spec
        //     //   modules: true,
        //     //   // generates a unique name for each class (e.g. app__app___2x3cr)
        //     //   localIdentName: '[name]__[local]___[hash:base64:5]',
        //     //   sourceMap: !isProduction,
        //     // },
        //   },
        //   {
        //     loader: 'sass-loader',
        //     options: {
        //       sourceMap: !isProduction,
        //     },
        //   },
        // ],
      },
      {
        test: /\.css$/,
        // include: [
        //   path.resolve(__dirname, 'node_modules'),
        // ],
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
};
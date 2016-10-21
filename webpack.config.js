const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/eatsy.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': '"production"'
        }
    })
  ],
  devtool: 'source-maps'
};

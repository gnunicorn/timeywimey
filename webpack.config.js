
'use strict';
var webpack = require('webpack');

module.exports = {
    output: {
      filename: '[name].js',
      path: 'www/assets/',
      publicPath: '/assets/'
    },

    cache: false,
    devtool: false,
    debug: true,
    entry: {'app':
                ['./src/scripts/app.jsx']
            },
  externals: {
        "jquery": "jQuery",
        "hoodie": "Hoodie"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],
    loaders: [{
      test: /\.jsx$/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
    {
      test: /\.gif/,
      loader: "url-loader?limit=10000&minetype=image/gif"
    },
    {
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.PrefetchPlugin("react"),
    new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ]
};
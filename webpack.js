const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': {
                'browsers': ['last 2 Chrome versions']
              }
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: true,
            camelCase: true
          }
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  entry: './poc-component.js',
  output: {
    filename: 'poc-component.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
}

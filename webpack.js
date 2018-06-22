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
                'browsers': ['cover 95% in US', 'not dead', 'not chrome < 60']
              }
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  entry: './src/basic-component.js',
  output: {
    filename: 'basic-component.js',
    path: __dirname
  },
  mode: 'production'
}

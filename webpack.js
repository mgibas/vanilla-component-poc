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
  entry: {
    'basic-component': './src/basic-component.js',
    'counter-component': './src/counter-component.js',
    'state-component': './src/state-component.js',
    'clock-component': './src/clock-component.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  mode: 'production'
}

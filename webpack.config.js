module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: "assets/",
    filename: 'knav.bundled.js',
    libraryTarget: 'var',
    library: 'knav',
  },
  module: {
    loaders: [
      {
        test: /\.(frag|vert)?$/,
        exclude: /node_modules/,
        loader: 'webpack-glsl',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};

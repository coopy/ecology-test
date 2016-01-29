module.exports = {

devServer: {
  contentBase: __dirname,
  noInfo: false
},

output: {
  path: __dirname,
  filename: "main.js",
  publicPath: "/"
},

devtool: "source-map",
entry: {
  app: ["./docs/docs.jsx"]
},
resolve: {
  extensions: ["", ".js", ".jsx"]
},
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      exclude: /node_modules|lib/
    }
  ]
}
};

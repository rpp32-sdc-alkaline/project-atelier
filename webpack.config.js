const path = require("path");
var SRC_DIR = path.join(__dirname, "/public/client/src");
var DIST_DIR = path.join(__dirname, "/public/client/dist")
var CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new CompressionPlugin()
  //   new CompressionPlugin({
  //     asset: "[path].gz[query]",
  //     algorithm: "gzip",
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  ],
  optimization: {
    chunkIds: "size",
    // method of generating ids for chunks
    moduleIds: "size",
    // method of generating ids for modules
    mangleExports: "size",
    minimize: true
  }
}
const webpack = require("webpack");
const path = require("path");

/**
 * Constants
 */
const isProduction = process.argv.indexOf("-p") >= 0;
const sourcePath = path.join(__dirname, "./src");
const outPath = path.join(__dirname, "./dist");

/**
 * Plugins
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
  context: sourcePath,
  entry: {
    app: "./index.ts"
  },
  output: {
    path: outPath,
    filename: "bundle.js",
    chunkFilename: "[chunkhash].js",
    publicPath: "/"
  },
  target: "web",
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "src"),
		],
		extensions: [".js", ".jsx", ".sass", ".json", ".css", ".ts", ".tsx"]
	},
	performance: {
		hints: "warning",
		maxAssetSize: 2000000,
		maxEntrypointSize: 4000000
	},
	parallelism: 2,
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: "assets/index.html"
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: "minimal"
  },
  devtool: "cheap-module-eval-source-map",
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: "empty",
    net: "empty"
  }
};

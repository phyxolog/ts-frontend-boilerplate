const path = require("path");

/**
 * Plugins
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

/**
 * Constants
 */
const isProduction = process.argv.indexOf("-p") !== -1;
const sourcePath = path.join(__dirname, "./src");
const outPath = path.join(__dirname, "./dist");

module.exports = {
  context: sourcePath,
  entry: "./index.tsx",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },

      {
        test: /\.sass$/,
        loaders: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, "src")
              ]
            }
          }
        ]
      },

      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "postcss-loader"]
      },

			{
				test: /\.(svg|woff|woff2|ttf|otf|png|jpg)$/,
				include: [
					path.resolve(__dirname, "node_modules"),
					path.resolve(__dirname, "src"),
				],
				loader: "url-loader",
				query: {
					limit: 1000,
					name: `[name].[ext]`
				}
      },

			{
				test: /\.json$/,
				loader: "json-loader"
			},
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
    ],
    extensions: [".js", ".jsx", ".sass", ".json", ".css", ".ts", ".tsx"]
  },
  output: {
    filename: "bundle.js",
    path: outPath
  },
  performance: {
    hints: "warning",
    maxAssetSize: 4000000,
    maxEntrypointSize: 4000000
  },
  parallelism: 2,
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
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: "assets/index.html"
    })
  ],
};

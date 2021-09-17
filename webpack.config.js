const path        = require("path")

module.exports = {
  mode: "production",
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    chunkFilename: '[name]-[contenthash].js',
    hashFunction: 'sha256',
    hashDigestLength: 64,
    path: path.resolve(__dirname, "app/assets/builds"),
  }
}

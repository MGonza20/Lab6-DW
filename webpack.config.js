const path = require("path");

module.exports = {
  mode: "development", 
  devtool:"none", 
  entry: "./src/script.js", 
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), 
  },
  //plugin
};
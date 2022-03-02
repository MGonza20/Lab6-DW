const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", 
  entry: {
      page1: "./src/page1/script.js",
      page2: "./src/page2/page2.js",
      page3: "./src/page3/page3.js",
      page4: "./src/page4/page4.js",
      page5: "./src/page5/page5.js",
      page6: "./src/page6/page6.js",
      page7: "./src/page7/page7.js",
      page8: "./src/page8/page8.js",
      page9: "./src/page9/page9.js",
      page10: "./src/page10/page10.js",
      page11: "./src/page11/page11.js",
      page12: "./src/page12/page12.js",
  },
  
  
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "bundle"), 
  },
  
  plugins: [
      new HtmlWebpackPlugin({
          template: "index.html",
          chunks: ['index']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page1/index.html",
        filename: page1,
        chunks: ['page1']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page2/callRadio.html",
        filename: page2,
        chunks: ['page2']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page3/boring.html",
        filename: page3,
        chunks: ['page3']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page4/goToLibrary.html",
        filename: page4,
        chunks: ['page4']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page5/magsOptions.html",
        filename: page5,
        chunks: ['page5']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page6/nope.html",
        filename: page6,
        chunks: ['page6']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page7/selectDate.html",
        filename: page7,
        chunks: ['page7']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page8/nope2.html",
        filename: page8,
        chunks: ['page8']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page9/seeBooks.html",
        filename: page9,
        chunks: ['page9']
      }),

      new HtmlWebpackPlugin({
        template: ".src/page10/selectTime.html",
        filename: page10,
        chunks: ['page10']
      }),
      new HtmlWebpackPlugin({
        template: ".src/page11/done.html",
        filename: page11,
        chunks: ['page11']
      }),
      new HtmlWebpackPlugin({
        template: ".src/page12/welcomeToNYC.html",
        filename: page12,
        chunks: ['page12']
      }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ["style-loader","css-loader"],
      },
    ],
  },
};
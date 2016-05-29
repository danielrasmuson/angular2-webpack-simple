// webpack.config.js
module.exports = {
  entry: './src/test',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
   loaders: [
     {
       test: /\.ts$/,
       loader: 'awesome-typescript-loader'
     }
   ]
 }
};

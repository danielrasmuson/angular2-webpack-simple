module.exports = {
  entry: [
    './src/polyfills',
    './src/vendor',
    './src/main'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
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

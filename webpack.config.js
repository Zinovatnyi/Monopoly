
module.exports = {
 context: __dirname + '/src',
 entry: './index',
 output: {
   path: __dirname + '/bin',
   publicPath: '/',
   filename: '[name].js'
 },
 watch: true, //webpack наблюдает за изменениями
 module: {
   rules: [
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       enforce: 'pre',
       test: /\.tsx?$/,
       use: "source-map-loader"
     },
     {
       test: /\.ts?$/,
       exclude: /node_modules/,
       use: [ 'babel-loader', 'ts-loader' ]
     },
     {
       test: /\.(png|jpg|json)$/, 
       use: "file-loader?name=[path][name].[ext]"
     }
   ]
 },
 
 devServer: {
  contentBase: __dirname,
  port: 8080,
 },

 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },

 externals: {
  pixi: "PIXI"
 },

 devtool: 'inline-source-map'

 

};


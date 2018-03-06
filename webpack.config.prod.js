var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var plugins = [];
plugins.push(new CleanWebpackPlugin(['build']));
//plugins.push(new UglifyJsPlugin({ minimize: true }));


module.exports = {
  devtool: 'source-map',
  entry: {
    index: APP_DIR + '/deni-react-modal/deni-react-modal.jsx',
  },
  output: {
    path: BUILD_DIR,
    publicPath: 'build/',
    filename: 'deni-react-modal.js',
    library: 'DeniReactModal',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
  	  {
  		  test: /\.scss$/,
  		  use: [
  		    {
  		  	  loader: "style-loader"
  		    },
  		    {
    			  loader: "css-loader",
  	  		  options: {
  		  	    sourceMap: false
  			    }
  		    },
  		    {
  			    loader: "sass-loader",
            options: {
  			      sourceMap: false
  			    }
  		    }
  	   	]
  	  }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: plugins
}

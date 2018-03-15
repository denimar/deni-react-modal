const webpack = require('webpack');
const path = require('path');

const GHPAGES_DIR = path.resolve(__dirname, 'gh-pages');

module.exports = {
  mode: 'development',
  entry: GHPAGES_DIR + '/App.jsx',
  output: {
    path: GHPAGES_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: [/(node_modules)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
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
  		  	    sourceMap: true
  			    }
  		    },
  		    {
  			    loader: "sass-loader",
            options: {
  			      sourceMap: true
  			    }
  		    }
  	   	]
  	  },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: GHPAGES_DIR,
    compress: true,
    port: 3009,
    hot: true,
    progress: true,
    open: true
  }
};

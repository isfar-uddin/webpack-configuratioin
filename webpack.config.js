const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export={
	entry:'src/index.js',
	output: {
		path:__dirname + '/dist',
		filename:'bundle.js'
	},
	plugins:[
		new HtmlWebpackPlugin()
	]
	
}

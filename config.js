module.exports = {
	name: 'nodeJsRestifyApp',
	version: '0.0.1',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	base_url: process.env.BASE_URL || 'http://localhost:3000',
	db: {
		uri: process.env.MONGODB_URI || 'mongodb+srv://marceloguimaraes:srmCyDymS3kjZ2jE@cluster0-wjqd8.mongodb.net/test?retryWrites=true',
	},
};


	


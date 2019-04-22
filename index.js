/**
 * Module Dependencies
 */
const config = require('./config')
const restify = require('restify')
const mongoose = require('mongoose')
const restifyPlugins = require('restify-plugins')

/**
  * Initialize Server
 */
const server = restify.createServer({
	name: config.name,
	version: config.version,
	ignoreTrailingSlash: true
})

/**
  * Middleware
 */
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }))
server.use(restifyPlugins.acceptParser(server.acceptable))
server.use(restifyPlugins.queryParser({ mapParams: true }))
server.use(restifyPlugins.fullResponse())


/**
  * Start Server, Connect to DB & Require Routes
*/
server.listen(config.port, () => {
	// establish connection to mongodb
	mongoose.Promise = global.Promise;
	mongoose.connect(config.db.uri, { useNewUrlParser: true })

	const db = mongoose.connection

	db.on('error', (err) => {
	    console.error(err)
	    process.exit(1)
	});

	console.log(
		'%s v%s ready to accept connections on port %s in %s environment.',
		server.name,
		config.version,
		config.port,
		config.env
)

	db.once('open', () => {
	    require('./src/routers')(server)
	    console.log(`Server is listening on port ${config.port}`)
	});
});
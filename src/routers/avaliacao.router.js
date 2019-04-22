/**
 * Module Dependencies
 */
const Router = require('restify-router').Router
const routerInstance = new  Router()

/**
 * Module Controllers
 */
const AvaliacaoController = require('../controllers/AvaliacaoController')


routerInstance.get('/avaliacao', AvaliacaoController.findAll);
routerInstance.get('/avaliacao/:id', AvaliacaoController.findById);
routerInstance.post('/avaliacao', AvaliacaoController.create);
routerInstance.del('/avaliacao/:id', AvaliacaoController.delete);
routerInstance.put('/avaliacao/:id', AvaliacaoController.update);

module.exports = routerInstance
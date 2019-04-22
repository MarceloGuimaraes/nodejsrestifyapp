/**
 * Model Schema
 */
const Avaliacao = require('../models/Avaliacao')


module.exports = {

    /**
	 * LIST
	 */
    findAll(req, res, next) {
        Avaliacao.find({}).sort('name')
            .then(avaliacoes => res.json(avaliacoes))
            .catch(error => res.send(500, error))

            next()
    },

    /**
	 * GET
	 */
    findById(req, res, next) {
        Avaliacao.findById(req.params.id)
            .then(avaliacao => {
                if(avaliacao) res.json(avaliacao)
                else {
                    res.status(404)
                    res.json({message: 'Resource not found'})
                }
            })
            .catch(error => res.send(500, error))

            next()  
    },

    /**
	 * POST
	 */
    create(req, res, next) {
        Avaliacao.create(req.body)
            .then(avaliacao => {
                res.status(201)
                res.json(avaliacao)
            })
            .catch(error => res.send(500, error))

            next()  
    },


    /**
	 * UPDATE
	 */
    async update(req, res, next) {
        if(req.params.id) {
            const avaliacao = await Avaliacao.findById(req.params.id)
            if(!avaliacao) {
                res.json({message: 'Resource not found'})
            } else {
                Avaliacao.findOneAndUpdate(req.params.id, {...req.body}, {new: true})
                .then( avaliacao => res.send(avaliacao))
                .catch(error => res.send(500, error))
        
            }
        } else {
            res.send(400, {message: 'Parameter id is required'})
        }
        next()
    },
    

    /**
	 * DELETE
	 */
    async delete(req, res, next) {
        if(req.params.id) {
            const avaliacoes = await Avaliacao.findById(req.params.id)
            if(!avaliacao) {
                res.json({message: 'Resource not found'})
            } else {
                Avaliacao.findOneAndDelete(req.params.id )
                .then(_ => res.send(204))
                .catch(error => res.send(500, error))
        
            }
        } else {
            res.send(400, {message: 'Parameter id is required'})
        }
        next()
    }
    
}
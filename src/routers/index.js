const alunoRouter = require('../routers/aluno.router')
const avaliacaoRouter = require('../routers/avaliacao.router')

module.exports = function(server) {

    alunoRouter.applyRoutes(server)
    avaliacaoRouter.applyRoutes(server)

}
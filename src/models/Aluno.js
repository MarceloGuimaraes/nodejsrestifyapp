/**
 * Module Dependencies
 */
const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamps = require('mongoose-timestamp')

const AlunoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true,
        },
        telefone: {
            type: String,
            required: true,
        },
        endereco: {
            type: String,
            required: true,
        },
        dtNascimento: {
            type: Date,
            required: true
        },
        avaliacao:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Avaliacao'
        }],
        status: {
            type: String,
			required: true,
			enum: ['ACTIVE', 'INACTIVE'],
			default: 'ACTIVE',
        }
    },
    { minimize: false, versionKey: false },
)

AlunoSchema.plugin(timestamps)
AlunoSchema.plugin(mongooseStringQuery)

module.exports = mongoose.model('Aluno', AlunoSchema)
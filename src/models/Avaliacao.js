/**
 * Module Dependencies
 */
const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamps = require('mongoose-timestamp')

const AvaliacaoSchema = new mongoose.Schema(
    {
        objetivo: {
            type: String,
            required: true,
        },
        diagnostico: {
            type: String,
        },
        reclamacao: {
            type: String,
        },
        avaliacao: {
            type: String,
        },
        dtAvaliacao: {
            type: Date, 
            default: Date.now
        },
        status: {
            type: String,
			required: true,
			enum: ['ACTIVE', 'INACTIVE'],
			default: 'ACTIVE',
        }
    },
    { minimize: false, versionKey: false },
)

AvaliacaoSchema.plugin(timestamps)
AvaliacaoSchema.plugin(mongooseStringQuery)

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema)
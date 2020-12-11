'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudianteCursoSchema =new Schema({
    id_es : {type:String, required: true},
    id_cu : {type:String, required: true},
    fec_crea : {type: Date, default : Date.now()},
});

module.exports = mongoose.model('Estudiante_Curso',EstudianteCursoSchema);;
'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const apunte = require("./apunte");

const ApuntesEstudianteCursoSchema = new Schema({

    _id_ec: {type:String, required: true},
    apuntes:{type:apunte}
   
});

module.exports = mongoose.model('Apuntes_Estudiante_Curso',ApuntesEstudianteCursoSchema);
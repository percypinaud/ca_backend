'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursoSchema =new Schema({
    title:{ type : String, required: true },
    sub_title: { type: String } ,
    docente: { type: String, required: true },
    codigo: { type: String, required: true , unique:true },
    fec_crea: {type: Date, default : Date.now()},
    color: { type: String, required: true},
});

module.exports = mongoose.model("Cursos",CursoSchema);
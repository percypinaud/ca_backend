'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participacionSchema = new Schema({
    _id_ec : {type:String, required: true},
    id_cu:{type:String, required: true},
    name : {type:String, required: true},
    participacion: {type:String, required: true},
    nota : {type:Number, required: true},
    date : {type:String, required: true}
});

module.exports = mongoose.model("Participacion_Estudiante",participacionSchema);
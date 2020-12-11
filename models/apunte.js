'use strict'

const Apunte = {
    titulo: {type:String, required: true},
    content : {type:String, required:true},
    date : {type: Date, default : Date.now()},
};

module.exports = Apunte;
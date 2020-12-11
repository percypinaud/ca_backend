'use strict'

const Participacion_Estudiante = require('../models/participacion_estudiante');
const Estudiante_Cruso = require('../models/estudiante_curso');
const Usuario = require('../models/usuario');
const controller = {
    find : function(req,res){
        try{
            Participacion_Estudiante.find({},(err,data) => {
                if(err) return res.status(500).send({message:"Error al listar"});
                if(!data) return res.status(404).send({message:"No se encuentra datos"});
                res.status(200).send({data});
            });
        }catch(error){
            return res.status(409).send({message:`Error ${error}`});
        }
    },
    save : function (req, res){
        //let ndate = Date();let day = ndate.getDate();let month = ndate.getMonth() + 1;let year = ndate.getFullYear();let date = `${day}-${month}-${year}`;
        //console.log(date);
        try{
            var participacion_estudiante = new Participacion_Estudiante({
                _id_ec : req.body._id_ec,
                id_cu : req.body.id_cu,
                name :req.body.name,
                participacion: "NO",
                nota : 0,
                date: req.body.date
            });
            participacion_estudiante.save((err,data) => {
                if(err) res.status(500).send({ message:`Error al crear el estudiante_curso ${err}`});
                return res.status(200).send({ data });
            });
        }catch(error){
            return res.status(409).send({message:`Error ${error}`});
        }
    },
    listarP : async function (req, res) {
        let idcu = req.params.id_cu
        try{
            var estudiante_curso = Estudiante_Cruso.find({id_cu:idcu}).exec()
            estudiante_curso.then(estudianteCursoRespuesta => {
                let usersPromise = Usuario.find().exec();
                usersPromise.then(users=>{
                    let tablita = [];
                    users.forEach(user => {
                        estudianteCursoRespuesta.forEach(eCRespuesta => {
                            if (user._id == eCRespuesta.id_es) {
                                tablita.push({id_es : user._id, nombre:user.name });
                            }
                        });
                    });
                    res.status(200).send({tablita});
                });
            });
        }catch(error){
            return res.status(409).send({message: "Error: "+ error});
        }
    },
    findPBC: function (req,res){
        let idcu = req.params.id_cu;
        let fecha = req.params.date;
        try{
            Participacion_Estudiante.find({id_cu:idcu, date: fecha},(err,data)=>{
                if(err) return res.status(500).send({message:"Error al listar"});
                if(!data) return res.status(404).send({message:"No se encuentra datos"});
                res.status(200).send({data});
            });
        }catch(error){
            return res.status(409).send({message: "Error: "+ error});
        }
    },
    updatePBC: function(req, res){
        try{
            var _id = req.params.id;
            var update = req.body;

            Participacion_Estudiante.findByIdAndUpdate(_id,update,{new:true},(err,data) => {
                if(err) return res.status(500).send({message:"Error al actualizar"});
                if(!data) return res.status(404).send({message:"No se encontró la Participacion_Estudiante a actualizar"});
                res.status(200).send({
                    curso: data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    }
}


module.exports = controller;
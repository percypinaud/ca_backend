'use strict'

const Estudiante_Curso = require('../models/estudiante_curso');

const controller = {
    save : function(req,res){
        try{

            var estudiante_curso = new Estudiante_Curso({
               id_es : req.user,
               id_cu : req.body.curso,
            });

            estudiante_curso.save((err,data) => {
                if(err) res.status(500).send({ message:`Error al crear el estudiante_curso ${err}`});
                return res.status(200).send({ data });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    readAll : function(req,res){
        try{
            Estudiante_Curso.find({},(err,data) => {
                if(err) return res.status(500).send({message:"Error al listar los datos de Estudiante_Curso"});
                if(!data) return res.status(404).send({message:"No se encontraron datos"});
                res.status(200).send({
                    data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    findByIdEstudiante : function(req,res){
        try{ 
            Estudiante_Curso.find({id_es:req.user},(err,data) => {
                if(err) return res.status(500).send({message:"Error al listar los datos de Estudiante_Curso"});
                if(!data) return res.status(404).send({message:"No se encontraron datos"});
                res.status(200).send({ 
                    data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    findById : function(req,res){
        try{
            let _id = req.params.id;
            if( _id == null) return res.status(400).send({ message:"El Estudiante_Curso no Existe"});
            
            Estudiante_Curso.findById(_id,(err,data) => {
                if(err) return res.status(500).send({message:"Error al mostrar datos"});
                if(!data) return res.status(404).send({message:"No se encontraron datos del Estudiante_Curso"});
                return res.status(200).send({
                    data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    update : function(req,res){
        try{
            var _id = req.params.id;
            var update = req.body;

            Estudiante_Curso.findByIdAndUpdate(_id,update,{new:true},(err,data) => {
                if(err) return res.status(500).send({message:"Error al actualizar"});
                if(!data) return res.status(404).send({message:"No se encontró el Estudiante_Curso a actualizar"});
                res.status(200).send({
                    data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    delete : function(req,res){
        try{
            var _id = req.params.id;
            Estudiante_Curso.findByIdAndDelete(_id,(err,data) => {
                if(err) return res.status(500).send({message:"No se pudo eliminar"});
                if(!data) return res.status(404).send({message:"No se encontró el Estudiante_Curso a eliminar"});
                res.status(200).send({
                    data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    }
};

module.exports = controller;
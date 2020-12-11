'use strict'

const Curso = require('../models/curso');

const controller = {
    save : function(req,res){
        try{
            var curso = new Curso({
                title: req.body.title,
                sub_title: req.body.sub_title,
                docente: req.user,
                codigo: req.body.codigo,
                color: req.body.color,
            });
            curso.save((err,cursoSaved) => {
                if(err) res.status(500).send({ message:`Error al crear el curso ${err}`});
                return res.status(201).send({ curso: cursoSaved});
            });

        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    readAll : function(req,res){
        try{
            Curso.find({},(err,cursos) => {
                if(err) return res.status(500).send({message:"Error al listar cursos"});
                if(!cursos) return res.status(404).send({message:"No se encontraron datos"});
                res.status(200).send({
                    cursos
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    findByCursosProfesor: function(req,res){
        let _id = req.user;
        try{
            Curso.find({docente:_id},(err,data) => {
                if(err) return res.status(500).send({message:"Error al listar cursos"});
                if(!data) return res.status(404).send({message:"No se encontraron datos"});
                res.status(200).send({
                    data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    findExistsCurso : function(req,res){
        let _id = req.params.codigo;
        try{
            Curso.find({codigo:_id},(err,data) => {
                if(err) return res.status(500).send({message:"Error al listar cursos"});
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
            if( _id == null) return res.status(400).send({ message:"El Curso no Existe"});
            
            Curso.findById(_id,(err,data) => {
                if(err) return res.status(500).send({message:"Error al mostrar datos"});
                if(!data) return res.status(404).send({message:"No se encontraron datos del curso"});
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

            Curso.findByIdAndUpdate(_id,update,{new:true},(err,data) => {
                if(err) return res.status(500).send({message:"Error al actualizar"});
                if(!data) return res.status(404).send({message:"No se encontró el Curso a actualizar"});
                res.status(201).send({
                    curso: data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    },
    delete : function(req,res){
        try{
            var _id = req.params.id;
            Curso.findByIdAndDelete(_id,(err,data) => {
                if(err) return res.status(500).send({message:"No se pudo eliminar"});
                if(!data) return res.status(404).send({message:"No se encontró el curso a eliminar"});
                res.status(200).send({
                    curso:data
                });
            });
        }catch(error){
            return res.status(409).send({ message:`Error ${error}` });
        }
    }
};

module.exports = controller;
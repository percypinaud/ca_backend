'use strict'

const User = require('../models/usuario');
const service = require('../services/index');
const bcrypt = require("bcrypt-nodejs"); 

const controller = {
    singUp : function(req,res){
        try {
            var user = new User({
                email:req.body.email,
                name: req.body.fullName,
                password: req.body.password,
                role: "guest",
            });

            user.save((err) => {
                if(err) res.status(500).send({ message:`Error al crear el usuario ${err}`});
                return res.status(200).send({token: service.createToken(user)});
            });
        } catch (error) {
            return res.status(409).send({ message:`Error ${error}` });
        }   
    },
    singIn : function(req,res){
        User.findOne({email:req.body.email},(err,user)=>{
            if(err) return res.status(500).send({message: "Error de servidor"});

            if(!user) {
                return res.status(409).send({ message:"El email no existe " });
            }else{
                const resultPassword = bcrypt.compareSync(req.body.password,user.password);
                if(resultPassword){
                    req.user = user;
                    res.status(200).send({
                        token: service.createToken(user)
                    });
                }else{
                    return res.status(404).send({message:"Password incorrecto"});
                }
            } 
        });
    },
    listar: function(req,res){
        User.find((err,users) =>{
            if(err) return res.status(500).send({message:"Error al listar"});
            if(!users) return res.status(404).send({message:"No se encontraron datos"});
            res.status(200).send({
                users
            });
        });
    },
    datos: function(req,res){
        User.findOne({_id:req.user},(err,data)=>{
            if(err) return res.status(500).send({message:"Error al mostrar datos"});
            if(!data) return res.status(404).send({message:"No se encontraron datos del usuario"});
            res.status(200).send({
                data
            });
        });
    },
    role: function(req,res){
        User.findOneAndUpdate({_id:req.user},{role:req.body.rol},{new: true},(err,data)=>{
            if(err) return res.status(500).send({message:"Error al actualizar datos"});
            if(!data) return res.status(404).send({message:"No se encontraron datos del usuario"});
            res.status(200).send({
                token: service.createToken(data)
            });
        });
    }
};

module.exports = controller;
'use strict'

const ApuntesEstudiante_Curso = require('../models/apuntes_estudiante_curso');

const controller = {
    save: function (req, res) {
        try {
            const reqApunte = req.body;
            let apunteEstudianteCurso = {
                _id_ec: req.user,
                apuntes: reqApunte
            }
            let ap_estudiante_curso = new ApuntesEstudiante_Curso(apunteEstudianteCurso);
            ap_estudiante_curso.save((err, data) => {
                if (err) res.status(500).send({ message: `Error al crear el estudiante_curso ${err}` });
                return res.status(200).send({ data })
            }); 
        } catch (error) {
            return res.status(409).send({ message: `Error ${error}` });
        }
    },
    readAll: function (req, res) {
        try {
            ApuntesEstudiante_Curso.find({}, (err, data) => {
                if (err) return res.status(500).send({ message: "Error al listar los datos de Apuntes_Estudiante_Curso" });
                if (!data) return res.status(404).send({ message: "No se encontraron datos" });
                res.status(200).send({
                    data
                });
            });
        } catch (error) {
            return res.status(409).send({ message: `Error ${error}` });
        }
    },
    findById: function (req, res) {
        try {
            let _id = req.params.id;
            if (_id == null) return res.status(400).send({ message: "El Apunte_Estudiante_Curso no Existe" });

            ApuntesEstudiante_Curso.findById(_id, (err, data) => {
                if (err) return res.status(500).send({ message: "Error al mostrar datos" });
                if (!data) return res.status(404).send({ message: "No se encontraron datos del Apunte_Estudiante_Curso1" });
                return res.status(200).send({
                    data
                });
            });
        } catch (error) {
            return res.status(409).send({ message: `Error ${error}` });
        }
    },
    update: function (req, res) {
        try {
            var _id = req.params.id;
            var update = req.body;

            ApuntesEstudiante_Curso.findByIdAndUpdate(_id, update, { new: true }, (err, data) => {
                if (err) return res.status(500).send({ message: "Error al actualizar" });
                if (!data) return res.status(404).send({ message: "No se encontró el Apunte_Estudiante_Curso a actualizar" });
                res.status(200).send({
                    data
                });
            });
        } catch (error) {
            return res.status(409).send({ message: `Error ${error}` });
        }
    },
    delete: function (req, res) {
        try {
            var _id = req.params.id;
            ApuntesEstudiante_Curso.findByIdAndDelete(_id, (err, data) => {
                if (err) return res.status(500).send({ message: "No se pudo eliminar" });
                if (!data) return res.status(404).send({ message: "No se encontró el Apunte_Estudiante_Curso a eliminar" });
                res.status(200).send({
                    data
                });
            });
        } catch (error) {
            return res.status(409).send({ message: `Error ${error}` });
        }
    },
    findByEstudiante: function (req, res) {
        try {
            let _id_ec = req.user;
            if (_id_ec == null) return res.status(400).send({ message: "El Apunte_Estudiante_Curso no Existe" });

            ApuntesEstudiante_Curso.find({ _id_ec: _id_ec }, (err, data) => {
                if (err) return res.status(500).send({ message: "Error al mostrar datos" });
                if (!data) return res.status(404).send({ message: "No se encontraron datos del Apunte_Estudiante_Curso2" });
                return res.status(200).send({
                    data
                });
            });
        } catch (error) {
            return res.status(409).send({ message: `Error ${error}` });
        }
    },

};

module.exports = controller;
'use strict'

const express = require('express');
const est_cursoCtrl = require("../controllers/estudiante_curso");
const api = express.Router();
const auth = require("../middlewares/auth");

api.post('/save',auth,est_cursoCtrl.save);
api.get('/readAll',est_cursoCtrl.readAll);
api.put('/update/:id',est_cursoCtrl.update);
api.get('/find/:id?',est_cursoCtrl.findById);
api.delete('/delete/:id',est_cursoCtrl.delete); 
api.get('/findByIdEstudiante',auth,est_cursoCtrl.findByIdEstudiante);

module.exports = api;
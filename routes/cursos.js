'use strict'

const express = require('express');
const cursoCtrl = require("../controllers/curso");
const api = express.Router();
const auth = require("../middlewares/auth");

api.post('/save',auth,cursoCtrl.save);
api.get('/readAll',auth,cursoCtrl.readAll);
api.put('/update/:id?',auth,cursoCtrl.update);
api.get('/find/:id?',auth,cursoCtrl.findById);
api.get('/findExistsCurso/:codigo?',auth,cursoCtrl.findExistsCurso);
api.delete('/delete/:id',auth,cursoCtrl.delete);
api.get('/findByCursosProfesor',auth,cursoCtrl.findByCursosProfesor);

module.exports = api;
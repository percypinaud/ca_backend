'use strict'

const express = require('express');
const cursoCtrl = require("../controllers/curso");
const api = express.Router();
const auth = require("../middlewares/auth");

api.post('/save',auth,cursoCtrl.save);
api.get('/readAll',cursoCtrl.readAll);
api.put('/update/:id',cursoCtrl.update);
api.get('/find/:id?',auth,cursoCtrl.findById);
api.get('/findExistsCurso/:codigo?',cursoCtrl.findExistsCurso);
api.delete('/delete/:id',cursoCtrl.delete);
api.get('/findByCursosProfesor',auth,cursoCtrl.findByCursosProfesor);

module.exports = api;
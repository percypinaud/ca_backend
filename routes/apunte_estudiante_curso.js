'use strict'

const express = require('express');
const ap_est_cursoCtrl = require("../controllers/apuntes_estudiante_curso");
const api = express.Router();
const auth = require("../middlewares/auth");

api.post('/save',auth,ap_est_cursoCtrl.save);
api.get('/readAll',ap_est_cursoCtrl.readAll);
api.put('/update/:id',ap_est_cursoCtrl.update);
api.get('/find/:id',ap_est_cursoCtrl.findById);
api.delete('/delete/:id',ap_est_cursoCtrl.delete);
api.get('/findByEstudiante',auth,ap_est_cursoCtrl.findByEstudiante);
module.exports = api;
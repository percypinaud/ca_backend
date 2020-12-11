'use strict'

const express = require('express');
const participacionCtrl = require('../controllers/participacion_estudiante');
const auth = require("../middlewares/auth");
const api = express.Router();

api.get('/find',participacionCtrl.find);
api.post('/save',participacionCtrl.save);
api.get('/listarP/:id_cu?',participacionCtrl.listarP);
api.get('/findPBC/:id_cu?/:date?',participacionCtrl.findPBC);
api.put('/updatePBC/:id',participacionCtrl.updatePBC);

module.exports = api;
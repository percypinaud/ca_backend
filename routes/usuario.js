'use strict'

const express = require('express');
const userCtrl = require("../controllers/usuario");
const auth = require("../middlewares/auth");
const api = express.Router();

api.post('/sign-up',userCtrl.singUp);
api.post('/sign-in',userCtrl.singIn);

api.get('/listar',userCtrl.listar);
api.get('/user',auth,userCtrl.datos);
api.put('/role',auth,userCtrl.role);

module.exports = api;
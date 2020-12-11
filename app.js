'use strict'

const express = require("express");
const body_parser = require("body-parser");
const helmet = require("helmet");

var app = express();

var users_routes = require('./routes/usuario');
var cursos_routes = require('./routes/cursos');
var participacion_estudiantes = require('./routes/participacion_estudiante');
var est_cur_router = require('./routes/estudiante_curso');
var app_est_cur_router = require('./routes/apunte_estudiante_curso');

//Middlewares
//app.use(helmet());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

//Rutas
app.use('/auth',users_routes);
app.use('/cursos',cursos_routes);
app.use('/est-cur',est_cur_router);
app.use('/ap-est-cur',app_est_cur_router);
app.use('/participacion',participacion_estudiantes);

module.exports = app;
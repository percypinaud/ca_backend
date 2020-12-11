"use strict"

 var request = require('supertest')
 var request = request("http://localhost:3001/cursos/")

 const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmNjNDk5ZDU0YmJiNjIzZTQxZGFlODkiLCJuYW1lIjoiRW1hbnVlbCBQaW5hdWQiLCJpYXQiOjE2MDc2Nzg2NDYsImV4cCI6MTYwODg4ODI0Niwicm9sZSI6ImRpcmVjdG9yIn0.431ylEwmIUHPebfnxq_dliIKo09J-EtKGbM9VD4PG_0";

    describe('readAll', function() {
      describe('GET', function(){
         it('Debería devolver un json', function(done){
             request.get('readAll')
                 .set('Accept', 'application/json')
                 .set('Authorization','Bearer '+token)
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
     });
    });

    describe('findByCursosProfesor', function() {
      describe('GET', function(){
          it('Debería devolver un json', function(done){
              request.get('findByCursosProfesor')
                  .set('Accept', 'application/json')
                  .set('Authorization','Bearer '+token)
                  .expect('Content-Type', /json/)
                  .expect(200, done);
          });
      });
    });

    describe('findExistsCurso', function() {
      describe('GET', function(){
          let codigo = "sd34";
          it('Debería devolver json como formato de datos / json', function(done){
              request.get('findExistsCurso/'+codigo)
                  .set('Accept', 'application/json')
                  .set('Authorization','Bearer '+token)
                  .expect('Content-Type', /json/)
                  .expect(200, done);
          });
      });
    });

    describe('find', function() {
      describe('GET', function(){
          let _id = "5fd39cc1bca97c1d601264db";
          it('Debería devolver json', function(done){
              request.get('find/'+_id)
                  .set('Accept', 'application/json')
                  .set('Authorization','Bearer '+token)
                  .expect('Content-Type', /json/)
                  .expect(200, done);
          });
      });
    });

    describe('update', function(){
      it('Debería devolver el código de estado 201', function(done){
          let _id = "5fd39cc1bca97c1d601264db";
          let Curso = { 
            title:"CursoPruebaUpdate",
            sub_title:"Esta es una prueba Update",
            codigo:"sd34 Update",
            color:"info",
          }

          request.put('update/'+_id)
              .set('Authorization','Bearer '+token)
              .set('Accept', 'application/json')
              .send(Curso)
              .expect('Content-Type', /json/)
              .expect(201,done)
          });
    });
    /*
    describe('save', function(){
      it('Debería devolver el código de estado 201', function(done){
          let Curso = { 
            title:"CursoPrueba",
            sub_title:"Esta es una prueba",
            codigo:"sd34",
            color:"info",
          }

          request.post('save')
              .set('Authorization','Bearer '+token)
              .set('Accept', 'application/json')
              .send(Curso)
              .expect('Content-Type', /json/)
              .expect(201,done)
          });
    });
    */
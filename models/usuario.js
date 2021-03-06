'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs"); 

const UserSchema =new Schema({
    email : {type : String ,unique : true,lowercase: true, required:true},
    name : {type: String, required: true},
    password : {type: String,required:true},
    role: {type: String, required:true,default:null},
    fec_crea: {type: Date, default : Date.now()},
});


UserSchema.pre('save',function(next){
    let user = this;
    if(!user) return next();
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(user.password,salt,null,(error,hash)=>{
            if(error) return next(error);
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('Users',UserSchema);;
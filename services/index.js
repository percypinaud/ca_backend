'use strict'

const jwt = require("jwt-simple");
const moment = require("moment");
const config = require("../config"); 

function createToken(user){
    const payload = {
        sub: user._id,
        name: user.name,
        iat: moment().unix() ,
        exp: moment().add(14,'days').unix(),
        role: user.role
    }
    
    return jwt.encode(payload,config.SECRET_TOKEN);
}

function decodeToken(token){
    const decoded = new Promise((resolve,reject)=>{
        try{

            const payload =jwt.decode(token,config.SECRET_TOKEN);
            if(payload.exp < moment().unix()){
                reject({
                    status:"401",
                    message:"El token a expirado"
                });
            }
            resolve(payload.sub);
            
        }catch(err){
            console.log(err)
            reject({
                status:500,
                message:"Invalid Token"
            })
        }
    });

    return decoded;
}

module.exports = {
    createToken,
    decodeToken
};
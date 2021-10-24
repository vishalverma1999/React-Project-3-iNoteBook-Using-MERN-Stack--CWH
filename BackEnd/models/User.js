const mongoose = require('mongoose');   // mongoose imported

const UserSchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dtae: {
        type: Date,
        default: Date.now         // Date.now() --> Don't do this, hume function dena hai call nahi karna, run to jab hoga jab actually mein koi document insert hone waala hoga mongo mein
    },
  });




// To Use this schema
module.exports = mongoose.model('user', UserSchema);          //mongoose.model means schema se ek koi model banana hai, here we choose model name = user aur schema to hai hi UserSchema...model banne ke baad ab hum export karenge using module.exports... HUM in Schemas ko apne routes mein use karenge
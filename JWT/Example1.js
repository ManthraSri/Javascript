//JWT TOKEN GENERATION

const jwt = require('jsonwebtoken');
const Secretkey = "secretkey";
const payload = {id:1,username:"Manthra"}
const token = jwt.sign(payload,Secretkey,{expiresIn:'1h'})
console.log("token Generated:",token)



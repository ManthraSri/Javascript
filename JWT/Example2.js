//TOKEN VERIFICATION
const jwt = require('jsonwebtoken')
const Secretkey = "secretkey"
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJNYW50aHJhIiwiaWF0IjoxNzQxODQ3NzEyLCJleHAiOjE3NDE4NTEzMTJ9.t_kHVm3rmJzclF69tctmlktWlmEWb6vy5pjZBtkl8n0"
try{
    const decode =jwt.decode(token)
    console.log("decoded",decode)
}catch(err){
    console.log("invalid")
}





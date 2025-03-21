// ROLE BASED ACCESS - GENERATION
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkey";
const payload = {id: 1,username: "Manthra",role: "admin", permissions: ["read", "write", "delete"] };
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
console.log("JWT:", token);
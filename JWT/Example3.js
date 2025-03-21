//RRFRESH TOKEN GENERATION
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkey";
const oldToken = jwt.sign({ username: "Manthra" }, SECRET_KEY, { expiresIn: "10s" });
const refreshToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY, { ignoreExpiration: true }); 
        return jwt.sign({ username: decoded.username }, SECRET_KEY, { expiresIn: "1h" });
    } catch (err) {
        return null;
    }};
setTimeout(() => {
    const newToken = refreshToken(oldToken);
    console.log("Refreshed Token:", newToken);
}, 15000); 
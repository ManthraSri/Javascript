// BASIC
const express = require('express');
const app = express();
const PORT = 3000;
const myMiddleware = (req, res, next) => {
    next(); 
};
app.use(myMiddleware);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



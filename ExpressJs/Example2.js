// //METHODS USING EXPRESS
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()); 
app.get('/user', (req, res) => {
    res.json({ message: 'GET Request' });
});
app.post('/user', (req, res) => {
    res.json({ message: 'POST Request', data: req.body });
});
app.put('/user', (req, res) => {
    res.json({ message: 'PUT Request', data: req.body });
});
app.delete('/user', (req, res) => {
    res.json({ message: 'DELETE Request' });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    res.json(user);
});

// POST: Create a new user
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Update entire user data
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user.name = req.body.name;
    res.json(user);
});

// PATCH: Partial update for a user
app.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    for (const key in req.body) {
        user[key] = req.body[key];  
    }
    res.json(user);
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

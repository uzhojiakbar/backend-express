const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    // Foydalanuvchilar ro'yxatini qaytarish
    res.status(200).json(users);
});

// app.post('/users', (req, res) => {
//     const { name, email } = req.body;
//     users.push({ name, email });
//     res.status(201).send('Foydalanuvchi muvaffaqiyatli qo`shildi');
// });

module.exports = app;

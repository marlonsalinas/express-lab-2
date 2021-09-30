// Dependencies
const express = require('express');
const app = express();
PORT = 3000;

// Routes
app.get('/greeting/:name', (req, res) => {
    res.send(`Hey there, ${req.params.name}!`);
});


// Listen
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})
// Dependencies
const express = require('express');
const app = express();
PORT = 3000;

// Routes
app.get('/greeting/:name', (req, res) => {
    res.send(`Hey there, ${req.params.name}!`);
});

// app.get('/tip/:total/:tipPercentage', tipAmount(req, res) => {
//     const x = req.params.total

// });

app.get('/tip/:total/:tipPercentage', (req, res) => {
        let x = req.params.total;
        let y = req.params.tipPercentage;
        let tip = y / x * 100;
        res.send(`${tip}`);
    }
);

// Listen
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})

// let tipAmount (req.params.total, req.params.tipPercentage) {
//     let x = req.params.total;
//     let y = req.params.tipPercentage
//     y = Math.pow(10, 2);
//     let tip = x * y;
// };
// res.send(console.log(tip));
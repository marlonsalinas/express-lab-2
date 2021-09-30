// Dependencies
const express = require('express');
const app = express();
PORT = 3000;

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

// Routes
app.get('/greeting/:name', (req, res) => {
    res.send(`Hey there, ${req.params.name}!`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
        let x = req.params.total;
        let y = req.params.tipPercentage;
        let tip = y / x * 100;
        res.send(`${tip}`);
    }
);

app.get('/magic/:question', (req, res) => {
    res.send(responses[Math.floor(Math.random()*responses.length)]);
});


// Listen
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})

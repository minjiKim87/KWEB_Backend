const express = require('express');

const app = express();
const port = 3000;

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

app.get('/factorial', (req, res) => {
    const number = req.query.number;
    if (number) {
        res.redirect(`/factorial/${number}`);
    } 
});

app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        res.send('숫자를 입력해주십시오.');
    } else {
        res.send(`${number}! = ${factorial(number)}`);
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
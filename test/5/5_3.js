const express = require('express');
const { runQuery } = require('./database');
const app = express();
const port = 3000;

app.get('/fare', async (req, res) => {
    try {
        const { uid } = req.query;
        const sql = `
            SELECT users.name,
            SUM(ROUND(types.fare_rate * trains.distance / 1000, -2)) AS totalFare
            FROM tickets
            INNER JOIN users ON tickets.user_id = users.id
            INNER JOIN trains ON tickets.train_id = trains.id
            INNER JOIN types ON trains.type_id = types.id
            WHERE users.id = ?
        `;
        const results = await runQuery(sql, [uid]);
        if (results.length > 0) {
            const { name, totalFare } = results[0];
            res.send(`Total fare for ${name} is ${totalFare} KRW.`);
        } else {
            res.send('User not found or no fare to display.');
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

app.get('/train/status', async (req, res) => {
    try {
        const { tid } = req.query;
        const sql = `
            SELECT COUNT(*) AS occupied, types.max_seats AS maximum
            FROM tickets
            INNER JOIN trains ON trains.id = tickets.train_id
            INNER JOIN types ON types.id = trains.type_id
            WHERE trains.id = ?
            GROUP BY types.max_seats
        `;
        const results = await runQuery(sql, [tid]);
        if (results.length > 0) {
            const { occupied, maximum } = results[0];
            const isSeatsLeft = occupied < maximum;
            res.send(`Train ${tid} is ${isSeatsLeft ? 'not ' : ''}sold out.`);
        } else {
            res.send('Train not found or no tickets sold.');
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

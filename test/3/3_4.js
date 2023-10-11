const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="post" action="/login">
            <div>
                <label>Username:</label>
                <input id="username-input" name="username" type="text">
            </div>
            <div>
                <label>Password:</label>
                <input id="password-input" name="password" type="password">
            </div>
            <div>
                <div>Introduce yourself</div>
                <textarea id="introduction-input" name="introduction"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const introduction = req.body.introduction;

    res.send(`
    <h2>로그인 성공</h2>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Introduction:</strong> ${introduction}</p>
    <a href="/">로그인 페이지로 돌아가기</a>
`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

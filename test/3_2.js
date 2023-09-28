const express = require('express');

const app = express();
const port = 3000;

app.get('/board/page/:page', (req, res)=>{
    const page = req.params.page;
    res.send(`현재 페이지는 ${page}페이지 입니다.`);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));
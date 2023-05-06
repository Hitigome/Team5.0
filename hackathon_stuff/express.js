const express = require('express');
const app = express();

app.get('/',(req,res) => {
    const filepath = __dirname + '/home.html';
    res.sendFile(filepath);
});

app.listen(3000);
const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('<h1>404 page not found</h1>');
})

app.listen(9000);
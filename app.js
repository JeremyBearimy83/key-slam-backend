const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/user/stats', (req, res) => {
    res.send('<h1>Here are your stats</h1>');
})

app.get('/user/race', (req, res) => {
    res.render('user-race', { user: "Ujjwal Singhal" });
})

app.get('/user/history', (req, res) => {
    res.send('<h1>Here is your history</h1>');
})

app.post('/user/race', (req, res) => {
    res.send("add stats here");
})

app.get('/admin/', (req, res) => {
    res.send("<h1>Welcome Admin</h1>");
})

app.get('/admin/create-test', (req, res) => {
    res.send('Create new typing test here');
})

app.use('/', (req, res) => {
    res.send('<h1>404 page not found</h1>');
})

app.listen(7000, () => console.log('Listening on port 7000'));
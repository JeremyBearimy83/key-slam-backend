const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const stats = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/user/stats', (req, res) => {
    res.render('user-stats', { stats: stats });
})

app.get('/user/race', (req, res) => {
    res.render('user-race', { user: "Ujjwal Singhal" });
})

app.get('/user/history', (req, res) => {
    res.render('user-history');
})

app.post('/user/race', (req, res) => {
    stats.push({ wpm: req.body.wpm, acc: req.body.acc });
    console.log(stats);
    res.redirect('/user/stats');
})

app.get('/admin/', (req, res) => {
    res.send("<h1>Welcome Admin</h1>");
})

app.get('/admin/create-test', (req, res) => {
    res.send('Create new typing test here');
})

app.use('/', (req, res) => {
    res.status(404).render('404');
})

app.listen(7000, () => console.log('Listening on port 7000'));
const express = require('express');
const app = express();

const control = require('../controllers/service-control');

app.post('/set',  control.control_post);
app.post('/setsecond',  control.control_second);
app.get('/table',control.control_get);
app.post('/main', control.control_main);
app.post('/phone',  control.control_phone);
app.post('/newphone', (req,res) => {
    console.log(req.body);
    res.send('newheloo');
});
module.exports = app;


const express = require('express');
const app = express();

const control = require('../controllers/service-control');

app.post('/set',  control.control_post);
app.get('/table',control.control_get);
app.post('/main',control.control_main);
module.exports = app;  
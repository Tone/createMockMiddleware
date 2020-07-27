const express = require('express');
const getMockMiddleware = require('./src/index');
var app = express();
app.use(getMockMiddleware());

app.listen(3000);
console.log('look in http://localhost:3000/');

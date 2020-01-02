const express = require('express');
const path = require('path');
const jsrmi = require('jsrmi');
const app = express();

app.set('controllers', path.join(__dirname, '/controllers'))

app.use("/",express.static(__dirname + '/views'));

jsrmi.route(app);

app.listen(8080, () => {
    console.log(`Test Server http://localhost:8080/`);
});
var express = require('express');
var app = express();
var path = require("path");
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'pass',
    database : 'students'
});

connection.connect();

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/pets', function (req, res) {
    var sql = 'SELECT * from pets';
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
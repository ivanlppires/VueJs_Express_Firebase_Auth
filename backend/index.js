const express = require('express');
const cors = require("cors");
const port = 5000;
const app = express();
const middleware = require('./middleware');
/* **** MYSQL **** */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'ivanpires',
  password: 'supernavi',
  database: 'clients'
});
connection.connect();

app.use(cors());
app.get('/public', (req, res) => {
    res.json(
        {
            message: "Dados públicos"
        }
    );
})
app.get('/private', middleware.checkToken, (req, res) => {
    res.json(
        {
            message: "Dados privados"
        }
    );
});
app.get('/clients', middleware.checkToken, (req, res) => {
    console.log('passou aqui')
    connection.query('SELECT * FROM clients', (err, rows) => {
        if(err) throw err;
        res.json(rows);
    });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const mysql = require('mysql');
const express = require('express');
const path = require('path');

// App Express Declaration
const app = express();


// MySQL Database Declaration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
});

// ySQL Database Connection
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL..');
    }
})

// Where CSS/JavaScript will gonna be
const publicDirectory = path.join(__dirname, './css');

// Calling the Public Directory
app.use(express.static(publicDirectory));


// View Engine for Viewing HTML
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

// Localhost:3000
app.listen(3000, () => {
    console.log('Connected to port 3000...');
})
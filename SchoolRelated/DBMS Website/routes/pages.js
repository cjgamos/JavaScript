const express = require('express');
const User = require('../core/user');
const Admin = require('../core/admin');
const router = express.Router();
const pool = require('../core/pool');

// create an object from the class User in the file core/user.js
const user = new User();
const admin = new Admin();

// Get the index page
router.get('/index', (req, res, next) => {
    let user = req.session.user;
    // If there is a session named user that means the use is logged in. so we redirect him to home page by using /home route below
    if (user) {
        res.redirect('/home');
        return;
    }
    // IF not we just send the index page.
    res.render('index');
});

// Admin Index
router.get('/adminindex', (req, res, next) => {
    let admin = req.session.admin;

    if (admin) {
        res.redirect('/adminhome');
        return;
    }
    res.render('adminindex');
})

// Get home page
router.get('/home', (req, res, next) => {
    let user = req.session.user;

    if (user) {
        res.render('home', { opp: req.session.opp, name: user.username });
        return;
    }
    res.redirect('/index');
});

// Get admin home
router.get('/adminhome', (req, res, next) => {
    let admin = req.session.admin;

    if (admin) {
        res.render('adminhome', { opp: req.session.opp, name: admin.username });
        return;
    }
    res.redirect('/adminindex')
})

// Get profile
router.get('/profile', (req, res, next) => {
    let user = req.session.user;

    if (user) {
        res.render('profile', { opp: req.session.opp, name: user.username });
        return;
    }
});

// Get admin logs
router.get('/adminlogs', (req, res, next) => {
    let admin = req.session.admin;

    if (admin) {

        // Logs 
        pool.getConnection((err) => {
            if (err) throw err;
            // Store the data into Logs variable
            let logs = `SELECT username, date FROM logs`;

            // Output the logs data in the website
            pool.query(logs, (err, result) => {
                if (err) throw err;

                let arr = [];

                for (i in result) {
                    arr.push(result[i]);
                }

                console.log(arr);
                res.render('adminlogs', {
                    log: arr
                });
            });
        });
    }
});

// Post login data
router.post('/login', (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    user.login(req.body.username, req.body.password, function (result) {
        if (result) {
            // Store the user data in a session.
            req.session.user = result;
            req.session.opp = 1;
            pool.query(`INSERT INTO logs(username) VALUES(?)`, [req.body.username], (err, result) => {
                console.log(`a user has logged in.`)
            });
            // redirect the user to the home page.
            res.redirect('/home');
        } else {
            // if the login function returns null send this error message back to the user.
            res.render('index', {
                messageLogin: 'Wrong Username/Password'
            });
        }
    })
});



// Post Admin Login
router.post('/adminlogin', (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    admin.login(req.body.username, req.body.password, function (result) {
        if (result) {
            // Store the user data in a session.
            req.session.admin = result;
            req.session.opp = 1;
            pool.query(`INSERT INTO logs(username) VALUES(?)`, [req.body.username], (err, result) => {
                console.log(`a user has logged in.`)
            });
            // redirect the user to the home page.
            res.redirect('/adminhome');
        } else {
            // if the login function returns null send this error message back to the user.
            res.render('adminindex', {
                messageLogin: 'Wrong Username/Password'
            });
        }
    })
});

// Post register data
router.post('/register', (req, res, next) => {
    // prepare an object containing all user inputs.
    let userInput = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    };
    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function (lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if (lastId) {
            // Get the user data by it's id. and store it in a session.
            user.find(lastId, function (result) {
                req.session.user = result;
                req.session.opp = 0;
                pool.query(`INSERT INTO logs(username) VALUES(?)`, [req.body.username], (err, result) => {
                    console.log(`a user has logged in.`)
                });
                res.redirect('/home');
            });
        } else {
            console.log('Error creating a new user ...');
        }
    });

});

// Post Admin Register
router.post('/adminregister', (req, res, next) => {
    let userInput = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    };

    admin.create(userInput, (lastId) => {

        if (lastId) {
            admin.find(lastId, (result) => {
                req.session.admin = result;
                req.session.opp = 0;
                res.redirect('/adminhome');
            });
        } else {
            console.log('Error creating a new admin user...');
        }
    })
})


// Get loggout page
router.get('/logout', (req, res, next) => {
    // Check if the session is exist
    if (req.session.user) {
        // destroy the session and redirect the user to the index page.
        req.session.destroy(function () {
            res.redirect('/index');
        });
    }
});

// Admin Logout
router.get('/adminlogout', (req, res, next) => {
    if (req.session.admin) {
        req.session.destroy(() => {
            res.redirect('/adminindex');
        });
    }
});

module.exports = router;
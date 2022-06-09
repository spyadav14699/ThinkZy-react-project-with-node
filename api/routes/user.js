const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const bycript = require('bcrypt');

const jwt = require('jsonwebtoken');


//   adding user sighnup using bycrypt to encrypt the password 
router.post('/sighnup', (req, res, next) => {
    bycript.hash(req.body.password, 10, (err, hash) => {

        if (err) {
            return res.status(500).json({
                error: err
            }); // if error in hashing the password
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password: hash,
                email: req.body.email,
                usertype: req.body.usertype
            });
            user.save().then(result => {
                console.log(result);
                res.status(201).json({
                    new_user: result
                });
            }
            ).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    });
});


// adding user login using bycrypt to encrypt the password
router.post('/login', (req, res, next) => {
    User.find({username: req.body.username})
    .exec()
    .then(user => {
        if (user.length < 1) {

            return res.status(401).json({
                message: 'Authentication failed'
            });
        }

        bycript.compare(req.body.password, user[0].password, (err, result) => {
            if(!result) {
                return res.status(401).json({
                    message: 'Authentication matching failed'
                });

            }
            if(result) {
                const token = jwt.sign({
                    username: user[0].username,
                    usertype: user[0].usertype,
                    email: user[0].email,
                    password: user[0].password


                },
                'secret',
                {
                    expiresIn: '24h'

                }

                );
                return res.status(200).json({
                    username: user[0].username,
                    usertype: user[0].usertype,
                    email: user[0].email,
                    password: user[0].password,
                    token: token
                });
            }
        }
        );
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
    );
}
);



            





module.exports = router;
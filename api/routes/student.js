const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../model/student');
const checkAuth = require('../middlerware/check.auth');

 // adding checkAuth middleware to check if user is logged in or not

 


 router.get('/', checkAuth,(req, res, next) => {

    Student.find()
   

    Student.find()
    .exec().then(result => {
        res.status(200).json({
           Students: result
        });
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        });
    });

});
router.get('/:id', (req, res, next) => {
    Student.findById(req.params.id)
    .then(result => {
        res.status(200).json(result);
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

    

router.post('/', (req, res, next) => {
   const student = new Student({
         _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age

});

    student.save().then(result => {
        console.log(result);
        res.status(201).json({
            msg: 'student created successfully'
        });
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//   delete request 
router.delete('/:id', (req, res, next) => {
    Student.remove({_id: req.params.id})
    .then(result => {
        res.status(200).json({
            msg: 'student deleted successfully'
        });
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//  update data to the data base 

 router.put('/:id', (req, res, next) => {
     Student.findByIdAndUpdate(req.params.id, {
         $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age
            }
        }
        ).then(result => {
            res.status(200).json({
                msg: 'student updated successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        });
});



module.exports = router;


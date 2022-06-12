const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../model/Product');
const checkAuth = require('../middlerware/check.auth');

 // adding checkAuth middleware to check if user is logged in or not

 


 router.get('/',(req, res, next) => {

Product.find()
    .exec().then(result => {
        res.status(200).json({
           Product: result
        });
    }
    ).catch(err => {
        res.status(500).json({
            error: err
        });
    });

});
router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
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
   const product = new Product({
         _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image


});

    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            msg: 'Product created successfully'
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
    Product.remove({_id: req.params.id})
    .then(result => {
        res.status(200).json({
            msg: 'Product deleted successfully'
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
     Product.findByIdAndUpdate(req.params.id, {
         $set: {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                image: req.body.image
            }
        }
        ).then(result => {
            res.status(200).json({
                msg: 'Product updated successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        });
});



module.exports = router;


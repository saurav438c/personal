const express = require('express');
const abc = require('../introduction/intro')
const cab = require('../logger/logger')
const bca=require('../validater/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    console.log('‘Welcome to my application. I am <name> and a part of FunctionUp Plutonium cohort, on console')
    abc.printName()
    cab.Welcome()
    

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
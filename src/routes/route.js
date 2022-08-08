const express = require('express');
const abc = require('../introduction/intro')
const cab = require('../logger/logger')
const bca=require('../validater/formatter')
const lodash=require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    console.log('‘Welcome to my application. I am <name> and a part of FunctionUp Plutonium cohort, on console')
    abc.printName()
    cab.Welcome()
    const months= ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let result=lodash.chunk(months,4)
  console.log(result)
  const odd=[1,3,25,87,98,83,87,69,85,37]
  let x=lodash.tail(odd,1)
  console.log(x)



    

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
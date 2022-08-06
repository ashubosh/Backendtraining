const express = require('express');
const abc = require('../introduction/intro')
const mod1 = require("../logger/logger")
const mod2 = require("../util/helper")
const mod3 = require("../validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    mod1.welcome()
    mod2.Date()
    mod2.Month()
    mod2.BatchInfo()
    console.log("After trim :",mod3.trim)
    console.log("Change to Lower Case :",mod3.lowerCase)
    console.log("change to Upper Case :",mod3.UpperCase)

    res.send('My Assignment of nodejs-modules')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
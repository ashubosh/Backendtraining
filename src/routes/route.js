const express = require('express');
const abc = require('../introduction/intro')
const mod1 = require("../logger/logger")
const mod2 = require("../util/helper")
const mod3 = require("../validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
<<<<<<< HEAD
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

=======
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
>>>>>>> cf5101ba2dcce713d3f6b8add393e576269e3391
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;
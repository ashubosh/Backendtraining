const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')
const mod1 = require("../logger/logger")
const mod2 = require("../util/helper")
const mod3 = require("../validator/formatter")

const router = express.Router();
let monthnames = ["January","February","March","April","May","June","July","August","Septrmber","October","November","December"]
let arrayOdd = [1,3,5,7,9,11,13,15,17,19];
let arr1 = [1,2,2,3,4]
let arr2 = [11,20,2,3,4]
let arr3 = [1,32,2,3,4]
let arr4= [6,6,2,3,4]
let arr5 = [8,2,7,3,9]
let fromPairs =  [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    let newArray = lodash.chunk(monthnames,[size=3])
    console.log(newArray)
    let OddNumbers = lodash.tail(arrayOdd)
    console.log(OddNumbers)
    let mergeArray = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(mergeArray)
    let newfromPairs = lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
    console.log(newfromPairs)
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
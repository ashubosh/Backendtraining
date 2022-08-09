const express = require('express');
<<<<<<< HEAD
const lodash = require('lodash')
const abc = require('../introduction/intro')
const mod1 = require("../logger/logger")
const mod2 = require("../util/helper")
const mod3 = require("../validator/formatter")
=======
const myHelper = require('../util/helper')
const underscore = require('underscore')
>>>>>>> 577c8012f3e731b63b8d86cc2c5abda0b8e44442

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
<<<<<<< HEAD
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
=======
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       //send all the films
      res.send(films) 
})

router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId

       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }

       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
})

>>>>>>> 577c8012f3e731b63b8d86cc2c5abda0b8e44442
module.exports = router;
// adding this comment for no reason
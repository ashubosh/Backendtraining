<<<<<<< HEAD
const printDate = function(){
    console.log("Date is : 7")
}

const printMonth = function(){
    console.log("Month is : August")
}

const getBatchInfo = function(){
    console.log("Plutonium, W3D6, the topic for today is Nodejs module system")
}

module.exports.Date = printDate
module.exports.Month = printMonth
module.exports.BatchInfo = getBatchInfo
=======
const printDate = function() {
    let currentDate = new Date()
    console.log(currentDate)    
}

const printMonth = function() {
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth() + 1
    console.log('The current month is '+currentMonth)
}

const getBatchInfo = function() {
  let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
  console.log(batchInformation)
}

module.exports.printDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.getCohortData = getBatchInfo
>>>>>>> 577c8012f3e731b63b8d86cc2c5abda0b8e44442

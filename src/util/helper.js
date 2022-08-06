const printDate = function(){
    console.log("Date is : 6")
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
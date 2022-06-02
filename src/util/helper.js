const printDate = function() {
    let currentDate =new Date()
    console.log(currentDate)}

const printmonth = function() {
    let currentDate=new Date()
    let currentMonth=currentDate.getMonth()
    console.log(currentMonth)}

const getBatchInfo = function(req ,res) {
    let betch=("betch name Radon week2,day15  topic was ocovered about today that how to refres the branch and how to create new branches and push and many new things ")
    console.log(betch)
}




module.exports.printDate = printDate
module.exports.printmonth=printmonth
module.exports.getBatchInfo=getBatchInfo
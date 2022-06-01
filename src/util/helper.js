const printDate = function(req ,res) {
    res.send(new Date.now().getDate())
}
const printmonth = function(req ,res) {
    res.send(new Month.now().getMonth())
}
const getBatchInfo = function(req ,res) {
    res.send("betch name Radon week2,day15  topic was ocovered about today that how to refres the branch and how to create new branches and push and many new things ")
}




module.exports.printDate = printDate
module.exports.printmonth=printmonth
module.exports.getBatchInfo=getBatchInfo
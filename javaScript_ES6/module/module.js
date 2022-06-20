module.exports.randomNumber = ()=>{
    return Math.floor(Math.random()*100)
}
module.exports.sumNumber = function(...num){
    let sum = 0
    num.forEach((e)=>{
        sum += e
    })
    return sum
}

function r(){
    return new Date()
}

module.exports.DayMonthYear = r
// วิธีที่ 1 
/* const random = require('./module').randomNumber
const sum = require('./module').sumNumber
const get = require('./module').DayMonthYear


console.log(random())
console.log(sum(1,2,3,4,5))
console.log(get()) */

// วิธีที่ 2 
const test = require('./module')

console.log(test.randomNumber())
console.log(test.sumNumber(1,2,3,4,5,6,7,8,9,10))
console.log(test.DayMonthYear())
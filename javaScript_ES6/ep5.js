const arr=[100,200,300]
const data=[10,20,...arr]

const color=["แดง","เขียว"]
const allcolor=["ขาว","เหลือง",...color]

const newcolor=["ดำ","เทา"]
allcolor.push(...newcolor)

console.log(data)
console.log(allcolor)
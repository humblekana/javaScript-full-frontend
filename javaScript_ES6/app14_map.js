// array map มีการคืนค่าต้องมีตัวแปรรองรับ

// case 1
/* const number = [1,2,3,4,5]
const result = number.map(e=>{
    return e*5
})
console.log(number)
console.log(result) */


// case 2
/* const data = ["ฝนตก","แดดร้อน","หมอก"]
const info = data.map((e,i)=>{
    return `วันที่ ${i+1} ,สภาพอากาศ ${e}`
})
console.log(info) */


// case 3 
const infodata = [{day:"01/06/2564",weather:"แดดร้อน"},
    {day:"03/06/2564",weather:"ฝนตก"},
    {day:"05/06/2564",weather:"หมอก"}
]
const resultinfo = infodata.map(e=>e.day)

console.log(resultinfo)
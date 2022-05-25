//ค้นหาข้อมูล
// indexOf(ข้อมูล) ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้-1
// find(ข้อมูล) ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex(ข้อมูล) ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const color = ["red","yellow","green","blue"]

let index = color.indexOf("green")
let search1 = color.find(element=>element == "blue")
let search2 = color.findIndex(element=>element == "blue")
console.log(index)
console.log(search1)
console.log(search2)




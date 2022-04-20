//array reduce

//map และ filter
const data = [10,20,30,40]
const mapData = data.map(e=>100)
const filterData = data.filter(e=>e>20)
console.log(mapData)
console.log(filterData)


//reduce array.reduce(()=>{},ค่าเริ่มต้น) value = 0
const info = [10,20,30,40,50]
let result =info.reduce((value,e)=>{
    const total = e+value
    return total
},0)
console.log(result)


const cart = [{fname:"กระเป๋า",price:500},
    {fname:"หนังสือ",price:100},
    {fname:"ขนม",price:2000}
]

let resultcart = cart.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)
console.log(resultcart)
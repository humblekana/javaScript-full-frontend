//array reduce
//reduce array.reduce(()=>{},ค่าเริ่มต้น) value = 0

// case 1
/* const info = [10,20,30,40,50]
let result =info.reduce((value,e)=>value+=e,0)
console.log(result) */


// case 2
/* const cart = [{fname:"กระเป๋า",price:500},
    {fname:"หนังสือ",price:100},
    {fname:"ขนม",price:2000}
]

let resultcart = cart.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)
console.log(resultcart) */
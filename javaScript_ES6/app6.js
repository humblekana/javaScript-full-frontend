/* array */
const colors=["red","green","blue"]
const [r,g,b] = colors

console.log(r)
console.log(g)
console.log(b)
console.log('-----------------------')

const m = [10,12,14,16,18,20]
const [a,c,...d] = m
console.log(a)
console.log(c)
console.log(d)
console.log('-----------------------')





/* object */
const product={
    productname:"kana",
    price:100,
    stock:5
}
const {productname:pro,price:pri,stock:sto} = product
console.log(pro)
console.log(pri)
console.log(sto)
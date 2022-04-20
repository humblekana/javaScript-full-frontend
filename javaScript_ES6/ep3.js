const username = "kana"
const num=19;
const address="กรุงเทพมหานคร"

const customer = {
    customername:username,
    age:num,
    address:address,
    showData(){
        console.log(this.customername)
    }
}
console.log(customer)
customer.showData()
console.log(customer["age"])


let a="koko data sheet"
let b=a.split(" ")
console.log(a)
console.log(b)

const username = "kana"
const num=19;
const address="กรุงเทพมหานคร"

/* สามารถนำตัวแปรที่สร้าง มากำหนดใน object ได้เลย */
const customer = {
    "customername":username,
    "age":num,
    "address":address,
    showData:function(){
        console.log(this.customername)
    },
    
}
console.log(customer.customername)
console.log(customer.age)
console.log(customer.address)
customer.showData()







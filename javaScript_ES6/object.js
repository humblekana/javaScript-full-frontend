const product = {
    brand:'toyota',
    price:5000,
    status:true,
    color:['black','white','bronze'],
    print(){
        console.log(this.include())
    },
    include(){
        let text = `รถยี่ห้อ ${this.brand} ราคา ${this.price} สถานะ ${this.status == true ?'มือ1': 'มือ2'} มีสี ${this.color[0]},${this.color[1]},${this.color[2]}`
        return text
    }
}

console.log(product.brand)
console.log(product.price)
console.log(product.status)
console.log(product.color)
console.log(product.include())
product.print()

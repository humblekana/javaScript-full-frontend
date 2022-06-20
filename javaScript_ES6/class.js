class Setting1{
    hello1 = "hello world"
    hello2 = "hello javascript"
    constructor(day,month,year){
        this.day = day
        this.month = month
        this.year = year
    }
    display1(){
        return `วันที่ ${this.day} เดือน ${this.month+1} ปี ${this.year} `
    }
    display2(){
        return `${this.day}/${this.month+1}/${this.year}`
    }
    static randomNum1(){
        return Math.floor(Math.random()*100)
    }
    static randomNum2(){
        return Math.floor(Math.random()*50)
    }
    
}

const test = new Setting1(5,10,2001)
console.log(test.display1())
console.log(test.display2())

console.log(Setting1.randomNum1())
console.log(Setting1.randomNum2())

console.log(test.hello1)
console.log(test.hello2)
console.log("--------------------------------------")


class Setting2 extends Setting1{
    constructor(day,month,year,hour,minute){
        super(day,month,year)
        this.day = day
        this.month = month
        this.year = year
        this.hour = hour
        this.minute = minute
    }
    // override
    display2(){
        return `${this.day}-${this.month+1}-${this.year}`
    }
    getFulldate(){
        const data_day = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"]
        return data_day[new Date(2022,5,19).getDay()] 
    }
    result(){
        return new Date(this.year,this.month,this.day,this.hour,this.minute)
    }
    
}
const test2 = new Setting2(19,5,2022,23,15)
console.log(test2.display1())
console.log(test2.display2())

console.log(Setting2.randomNum1())
console.log(Setting2.randomNum2())
console.log(test2.result())




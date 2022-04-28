class Setting1{
    hello = "สวัสดีครับ"
    entrance = "ยินดีต้อนรับครับ"
    constructor(day,month,year){
        this.day = day
        this.month = month
        this.year = year
    }
    display1(){
        return `วันที่ ${this.day} เดือน ${this.month} ปี ${this.year} `
    }
    display2(){
        console.log(`${this.day}/${this.month}/${this.year}`)
    }
    static randomNum(){
        return Math.floor(Math.random()*100)
    }
    
}

const test = new Setting1(5,10,2001)
console.log(test.display1())
test.display2()
console.log(Setting1.randomNum())
console.log("--------------------------------------")


class Setting2 extends Setting1{
    constructor(day,month,year,hour,minute){
        super(day,month,year)
        /*this.day = day
        this.month = month
        this.year = year*/
        this.hour = hour
        this.minute = minute
    }
    display2(){
        console.log(`${this.day}-${this.month}-${this.year}`)
    }
    getFulldate(){
        const data_day = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"]
        return data_day[new Date(1973,2,15).getDay()] 
    }
    result(){
        return new Date(this.year,this.month,this.day,this.hour,this.minute)
    }
    
}
const test2 = new Setting2(15,3,1986,12,5)
console.log(test2.display1())
test2.display2()
console.log(Setting2.randomNum())
console.log(test2.result())




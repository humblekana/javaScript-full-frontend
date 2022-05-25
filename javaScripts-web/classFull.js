// class other shape
class Shape {
    constructor(num){
        this.num = num
    }
    rectangle(){
        for (let i=0;i<this.num;i++){
            let str = ""
            for (let j=0;j<this.num;j++){
                str += "* "
            }
            console.log(str)
        }
    }
    triangle(){
        for (let i=0;i<this.num;i++){
            let str = ""
            for (let j=0;j<i+1;j++){
                str += "* "
            }
            console.log(str)
        }
    }
}

// class Date
class Displayinfo{
    static displayName(){
        let fname = "Sukachathum"
        let sname = "Seawsiritaworn"
        console.log(fname,sname)
    }
    static displayAge(){
        console.log(`${this.sendAge()}`)    
    }
    
    static sendAge(){
        let age = Math.floor(Math.random()*50)
        return age
    }
    /* ถ้าฟังชันก์ไม่เป็น static ใช้ this ไม่ได้ */
    defraud(){
        console.log(Displayinfo.sendAge())
    }
    
    
}

Displayinfo.displayAge()



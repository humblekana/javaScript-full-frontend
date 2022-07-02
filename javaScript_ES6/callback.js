function createNum(x,func){
    let a = 15
    let b = 3
    console.log(`${a} + ${b} = ${a+b}`)
    console.log(`${a} - ${b} = ${a-b}`)
    console.log('do someting function creatNum success')
    
    // เรียกฟังชันก์ที่กำหนดเป็น callback
    func(1,2)
}

function callbackTestOne(a,b){
    console.log(a,b,'regular function')
}

createNum(5,function(a,b){
    console.log(a,b,'anonymous function')
})

console.log('--------------------------------------')

createNum(10,(a,b)=>{
    console.log(a,b,'arrow function')
})

console.log('--------------------------------------')

createNum(10,callbackTestOne)

//-------------------------------------------------------------------------------

let AddNum1 = (a,b)=> {
     console.log(a,b,'use name arrow function in callback')
}

let Addnum2 = function(a,b){
    console.log(a,b,'use name anonymous function in callback')
}

createNum(3,AddNum1)
createNum(9,Addnum2)







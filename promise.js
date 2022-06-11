const promise = new Promise((resolve,reject)=>{
    let num = Math.floor(Math.random()*10)
    if (num > 5){
        resolve(num)
    }else{
        reject(num)
    }
}).then((response)=>{
    console.log('หมายเลขมากกว่า',response)
}).catch((error)=>{
    console.log('หมายเลขน้อยกว่า',error)
}).finally(()=>{
    console.log('kana')
})

function randomNum1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('randomTest1'),1000)
    })
}

function randomNum2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('randomTest2'),1000)
    })
}

function randomNum3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('randomTest3'),1000)
    })
}

Promise.all([randomNum1(),randomNum2(),randomNum3()]).then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})

/* randomNum1().then(response1=>{
    console.log(response1)
    return randomNum2()
}).then(response2=>{
    console.log(response2)
    return randomNum3()
}).then(response3=>{
    console.log(response3)
}).catch(error=>{
    console.log(error)
}) */

console.log('1','synchronous')
console.log('2','synchronous')
console.log('3','synchronous')
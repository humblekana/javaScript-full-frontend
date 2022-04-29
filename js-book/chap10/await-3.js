/*async function test1() {
    console.log(1)
    Promise.resolve(2).then(r => console.log(r))
    console.log(3)
}

async function test2() {
    console.log("a")
    await Promise.resolve("b").then(r => console.log(r))
    console.log("c")
}


setTimeout(test2, 1000)
test1()*/


/*async function test3(){
    const data_name = ["kana","kai"]
    const num = data_name[Math.floor(Math.random()*2)]
    if (num == "kana"){
        return await Promise.resolve(num)    
    }else{
        
        return await Promise.reject(num)     
    }
      
}

async function test4(){
    const data_name = ["nat","nut"]
    const num = data_name[Math.floor(Math.random()*2)]
    if (num == "kana"){
        return await Promise.resolve(num)    
    }else{
        
        return await Promise.reject(num)     
    }
}

test4().then(data=>console.log(data)).catch(data=>console.log(data))
const result = test3() 
result.then(data=>console.log(data)).catch(data=>console.log(data))*/

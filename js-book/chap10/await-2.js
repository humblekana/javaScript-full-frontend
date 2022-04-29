//----------------- set1 --------------------//
/*async function num() {
    console.log(1)
    console.log(await Promise.resolve(2))
    console.log(3)
    
}
async function letter() {
    console.log('a')
    console.log(await Promise.resolve('b'))
    console.log('c')
}

num()
letter()*/



//----------------- set2 --------------------//
/*async function num() {
    console.log(1)
    console.log(await Promise.resolve(2))
    console.log(3)
    const  respon = "python"    
    return Promise.resolve(respon)
}

async function letter() {
    console.log('a')
    console.log(await Promise.resolve('b'))
    console.log('c')
    const  respon = "javascript"    
    return Promise.resolve(respon)
}


num().then(data=>console.log(data))
letter().then(data=>console.log(data))*/




//----------------- set3 --------------------//
/*async function num() {
    const n = Math.random()*20
    console.log(1)
    console.log(await Promise.resolve(2))
    console.log(3)
    if (n>10){
        return "kana"       
    }else{
        return "kai"
    }
}
async function letter() {
    console.log('a')
    console.log(await Promise.resolve('b'))
    console.log('c')
}

num().then(data=>console.log(data))
letter()
//num().then(data=>console.log(data))*/
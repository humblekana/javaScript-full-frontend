getData = (fname,address="paris")=>{
    const info = `ชื่อ ${fname}  อยู่ที่ ${address}`
    return info
}

console.log(getData("kana","bangkok"))
console.log(getData("kong"))
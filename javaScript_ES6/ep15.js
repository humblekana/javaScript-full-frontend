// array Filter

const data = [10,20,30,40,50]
/*let dataresult = data.filter(e=>{
    return e>20
})*/
let dataresult = data.filter(e=>e>10)

console.log(dataresult)

const info = [
    {fname:"kana",salary:250,department:"student"},
    {fname:"kong",salary:150,department:"nisit"},
    {fname:"kai",salary:300,department:"doctor"},
    {fname:"pao",salary:500,department:"teacher"},
]

let inforesult = info.filter(e=>{
    return e.salary >= 300 && e.salary < 400
})

console.log(inforesult)
// array Filter

// case 1
/* const data = [10,20,30,40,50]
let dataresult = data.filter(e=>{
    return e>15
})
console.log(dataresult) */

// case 2
const info = [
    {fname:"kana",salary:250,department:"student"},
    {fname:"kong",salary:350,department:"nisit"},
    {fname:"kai",salary:300,department:"doctor"},
    {fname:"pao",salary:500,department:"teacher"},
]
const inforesult = info.filter(e=>{
    return e.salary >= 300 && e.salary < 400
})

console.log(inforesult)
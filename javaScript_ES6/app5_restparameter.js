function sumation(...arr){
    let total=0
    arr.forEach(i=>{
        total += i
    })
    return total
}

console.log(sumation(500,100,200,400));
console.log(sumation(500,100,200));
console.log(sumation(500,100));
console.log(sumation(500));
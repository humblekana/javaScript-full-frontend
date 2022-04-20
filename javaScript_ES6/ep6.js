sumation=(...numberarr)=>{
    let total=0
    for (let number of numberarr){
        total += number
    }
    return total
}
/*function sumation(...numberarr){
    let total=0
    for (let number of numberarr){
        total += number
    }
    return total
}*/

console.log(sumation(500,100,200,400));
console.log(sumation(500,100,200));
console.log(sumation(500,100));
console.log(sumation(500));
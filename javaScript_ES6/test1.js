function createNum(x,func){
    if (x<10){
        func(x,10)
    }else{
        func(x,20)
    }
}

/*createNum(5,function(a,b){
    console.log(a,b)
})*/

/*createNum(5,(a,b)=>{
    console.log(a,b)
})*/
//---------------------------------------------

/*let AddNum1 = (a,b)=> {
     console.log(a,b)
}
createNum(3,Addnum1)*/

/*let Addnum2 = function(a,b){
    console.log(a,b)
}
createNum(9,Addnum2)*/
//----------------------------------------------

/*function upNum1(a,b){
    console.log(a+b)
}
createNum(3,upNum1)*/




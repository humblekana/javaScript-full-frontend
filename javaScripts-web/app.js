function calculate(x,y){
    let result=x+y;
    return result;
}
function info(fname,sname,address="ไม่ต้องรู้หรอกไอสัส"){
    console.log(fname+sname,"address =",address)
}

let color = ["red","yellow","green"];
let fruit = ["apple","banana","orange"];
let fname = ["kana","kai","preange"]
let point1 = [50,20,-5,100,-200]
let point2 = [50,20,-5,100,-200]
color.sort();
color.reverse();
for (let i=0;i<color.length;i++){
    console.log("position",`${i+1}`,color[i]);
}

fruit.push("cherry");
fruit.sort();
fruit.forEach(printlist);
function printlist(item){
    console.log(item)      
}

let save1 = color.join(" ");
let save2 = color.toString();
console.log(save1)
console.log(save2)

let total = color.concat(fruit,fname)
console.log(total)

point1.sort(function(a,b){
    return b-a;
});
point2.sort(function(a,b){
    return a-b;
});
console.log(point1)
console.log(point2)


let objex = {
    product:"computer",
    price:10.52,
    quantity:50,
    type:"technology",
    printInfo1:function(){
        console.log(this.product,this.price,this.quantity)
    },
    printInfo2:function(){
        return this.product+" "+this.price+" "+this.quantity
    }
};
console.log("product","=",objex["product"])
console.log("product","=",objex.product)
console.log("price","=",objex["price"])
console.log("price","=",objex.price)
objex.printInfo1()
let keep=objex.printInfo2()
console.log(keep)

function lucky(){
    let data=confirm("คุณได้รับโชค");
    if (data){
        console.log("ยินดีด้วยคุณโง่จัด")
    }else{
        console.log("ยินดีด้วยคุณฉลาดจัด")
    }
}











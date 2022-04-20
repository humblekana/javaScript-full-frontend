const data = [10,20,30]
console.log(data)
//เพิ่มสมาชิกต่อท้าย
data.push(40)
data.push(50)
data.push(...[60,70])
console.log(data)


//ลบสมาชิกท้าย
data.pop()
data.pop()
console.log(data)


// shift ลบสมาชิกด้านหน้า
// unshift เพิ่มสมาชิกด้านหน้า
data.shift()
data.shift()
console.log(data)

data.unshift(5)
data.unshift(1)
console.log(data)

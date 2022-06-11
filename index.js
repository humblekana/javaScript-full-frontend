let a = 'kana'
let b = 'kai'
let c = 'peang'

// || จะหาไปเรื่อยๆจนกว่าจะเจอ true ถ้าเจอ true จะหยุดแล้วเอาคำตอบนั้น ถ้าไม่เจอ true เอาตัวสุดท้ายที่เช็ค
console.log(undefined || '')
console.log('' || undefined)
console.log('kana' || '')
console.log(undefined || '')
console.log(undefined || '' || 'kana')
console.log(undefined || '' || NaN)

console.log('--------------------------------------------------------------------------')
// && จะหาไปเรื่อยๆจนกว่าจะเจอ false ถ้าเจอ false จะหยุดแล้วเอาคำตอบนั้น ถ้าไม่เจอ false เอาตัวสุดท้ายที่เช็ค
console.log(undefined && '')
console.log('' && undefined)
console.log('kana' && '')
console.log(undefined && '')
console.log(undefined && '' && 'kana')
console.log(undefined && '' && NaN)
console.log('kana' && 'kai' && 'peang')
console.log('kana' && undefined && NaN)
console.log('kana' && 'kai' && NaN)



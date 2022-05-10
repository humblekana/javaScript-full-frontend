new Promise((resolve, reject) => {
    let r = Math.random()
    if (r <= 0.5) {
        resolve(r + ' => resolve')
    } else {
        reject(r + ' => reject')
    }
}).then(result => {
    console.log("num1",result)
}).catch(reason => {
    console.log("num1",reason)
}).finally(() => {
    console.log('Promise done!')
})



new Promise((resolve) => resolve(Math.random())).then((result) => console.log("num2",result))

const p = Promise.resolve(Math.random())
p.then(result=>console.log("num3",result))


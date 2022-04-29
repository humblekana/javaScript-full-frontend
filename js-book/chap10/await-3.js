
async function test1() {
    console.log(1)
    Promise.resolve(2).then(r => console.log(r))
    console.log(3)
}

async function test2() {
    console.log("a")
    await Promise.resolve("b").then(r => console.log(r))
    console.log("c")
}

test1()
setTimeout(test2, 1000)
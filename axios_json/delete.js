const axios = require('axios')

axios.delete('http://localhost:3000/users/6')
.then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})
const axios = require('axios')

axios.post('http://localhost:3000/users',{
    "id": 6,
    "first_name": "Kai",
    "last_name": "best",
    "email": "Kai543@gmail.com"
})
.then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})
const axios = require('axios')

axios.put('http://localhost:3000/users/6',{
    "id": 6,
    "first_name": "Kapeang",
    "last_name": "beautiful",
    "email": "Kapeang989@gmail.com"
})
.then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})
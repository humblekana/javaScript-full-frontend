const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))


app.all('/axios_testdata',(request,response)=>{
        if (request.xhr || request.headers.accept.indexOf('json')>-1){
            console.log(request.query.password)
            response.send({
                "firstname":"sukachathum",
                "surname": "seawsiritaworn",
                "age": 20
            })
        }else{
            console.log('yeh')
            response.send({
                "firstname":"unknow",
                "surname": "unknow",
                "age": 0
            })
        }
    
        
    
    
})

app.listen(3000,()=>{
    console.log('connect to port 3000')
})
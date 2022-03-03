const express = require('express')

const app = express()

const dataservice = require("./services/data.service")

const jwt = require('jsonwebtoken')

app.use(express.json())

 app.get('/', (req,res)=>{
     res.send("GET REQUEST!!!")
 })

 app.post('/', (req,res)=>{
    res.send("POST REQUEST!!!")
})

app.put('/',(req,res)=>{
    res.send("PUT REQUEST!!!")
})


app.patch('/',(req,res)=>{
    res.send("PATCH REQUEST!!!")
})

app.delete('/',(req,res)=>{
    res.send("DELETE REQUEST!!!")
})

app.post('/register',(req,res)=>{
    console.log(req.body.email);
    const result =dataservice.register(req.body.email,req.body.password,req.body.uname,req.body.place)
    res.status(result.statusCode).json(result)
    
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    const result =dataservice.login(req.body.email,req.body.password)
    res.status(result.statusCode).json(result)
})

app.post('/products',(req,res)=>{
    console.log(req.body.email);
    const result = dataservice.products(req.body.email,req.body.productname,req.body.productprice,req.body.productquantity,req.body.productcategory)
    res.status(result.statusCode).json(result)
})




app.listen(3000,()=>{
    console.log("server started at 3000");
})
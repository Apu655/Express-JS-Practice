const express = require('express')

const app = express()

const adminRoute = express.Router()

adminRoute.get('/dashboard/',(req,res)=>{
    res.send('we are in admin dashboard')
    console.log(req.originalUrl)
})

app.use('/admin',adminRoute)

app.get('/',(req,res)=>{
    console.log(req)
    res.send('Hello motherfucker')
})

app.listen(3000,()=>{
    console.log('Lisateninig to port 3000')
})
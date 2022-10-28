const express = require("express")

const app = express()
const admin = express()

// app.use(express.json())

app.use(express.json())

admin.get("/dashboard",(req,res)=>{
    console.log(admin.mountpath)
    res.send("Welcome to admin dashboard")
})

// For url routes, case sensitivity will matter
app.enable("case sensitive routing")
app.disable("case sensitive routing")


// Can be accessed through all methods (GET,PUT, DELEtE ETC)
app.all("/all",(req,res)=>{
    res.send("This is a respond for all sort of methods calls")
    console.log(req.body)
})

app.locals.title = "My App"
app.get("/",(req, res)=>{
    console.log(`${new Date(Date.now())}`)
    res.send("This is home page");
})

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Post request is listened")
})

// matches params at route
app.param("id",(req,res,next,id)=>{
    // 
    const user  ={
        userid:id,
        name:"Bangladesh"
    }
    req.userDetails = user;
    next()
})

app.get("/user/:id",(req,res)=>{
    res.send("Welcome to see id page")
    console.log(req.query)
})

app.param("user",(req,res,next,id)=>{
    req.br = id ==="apu"?"Admin":"Not admin"
    next()
    
})

app.get("/:user",(req,res)=>{
    res.send("User is sent")
    console.log(req.br)
})



app.use("/admin",admin);
app.listen(3000,()=>{
    console.log("Server is running.")
})
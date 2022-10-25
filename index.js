const express = require("express")

const app = express()
const admin = express()

// app.use(express.json())



admin.get("/dashboard",(req,res)=>{
    console.log(admin.mountpath)
    res.send("Welcome to admin dashboard")
})

app.locals.title = "My App"
app.get("/",(req, res)=>{
    res.send("This is home page");
})

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Post request is listened")
})
app.use("/admin",admin);
app.listen(3000,()=>{
    console.log("Server is running.")
})
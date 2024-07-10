const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/connectDB")
const router = require("./routes/index")
const cookiesParser = require("cookie-parser")
const {app, server} =  require("./socket/index")

// const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

// middleware
app.use(express.json({extended: true }))
app.use(cookiesParser())
app.use(express.urlencoded({extended: true }));

const PORT = process.env.PORT || 8080


app.get("/", (req,res)=>{
    res.json({
        message : "Server Running at " + PORT
    })
})

// api EndPOints
app.use("/api", router)

connectDB().then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Server Started at PORT : ${PORT}`)
    })
})



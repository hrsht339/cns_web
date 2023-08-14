const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const {flowModel} = require("./model/flow.model")
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcom to flow")
})

app.listen(3500,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server up")
})
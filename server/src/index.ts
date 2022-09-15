import express from "express"

const app = express()

app.get('/',(req,res)=>{
  return res.send("hello world")
})

app.listen(3333, ()=>{console.log("http://localhost:3333/")})
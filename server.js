require('dotenv').config()
const express=require('express')
const path=require('path')
const app=express()
const PORT=process.env.PORT||3000
const INDEX=process.env.INDEX||'index.html'
const BACKGROUND=process.env.BACKGROUND||'background.jpg'

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, INDEX))
})
app.get('/' + BACKGROUND, (req, res)=>{
  res.sendFile(path.join(__dirname, BACKGROUND))
})
app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`)
})

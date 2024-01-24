/*const http =require('http');
const fs=require('fs');
const index=fs.readFileSync('index.html','utf-8')
const data=fs.readFileSync('data.json','utf-8')

const server= http.createServer((req,res)=>{
    console.log(req.url)
    console.log("Server Started")
    
    res.setHeader('Content-Type','text/html');
    //res.setHeader('Content-Type','application/json');

    res.end(index)
})

server.listen(8000)
*/

const fs=require('fs');
const express=require('express');

const server=express()

server.get("/",(req,res)=>{
  //  res.send('Hello')
   // res.send('F:\PersonalProjects\Personal\Node\index.html')
   res.json(data)

})




server.listen(8080,()=>{
    console.log("Server Started")
})
//const http = require('http')
//const PORT = 3000

//const server = http.createServer((req,res)=>{
 //   res.writeHead(200,{'content-type':'text/plain'
   //     if(req.url==='/' && req.method==='GET')
     //       res.end('Hello World')
       // else 
      //  {
    //        res.writeHead(404,{'content-type':'text/plain'})
  //      }
//    })
//})

//server.listen(PORT,
  //  ()=>{console.log('server is running on the localhost'+PORT)}
//)

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.sendFile(path.join('./views/index.html'),{root:_dirname})
})

app.listen(port,()=>console.log(`server running on http://localhost:${PORT}`))
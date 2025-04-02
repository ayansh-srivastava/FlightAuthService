const express=require(`express`)
const {PORT}=require(`./config/serverConfig`)


const server=async ()=>{
    const app=express();
    await app.listen(PORT,()=>{
         console.log("Server started on PORT",PORT)
    }) 
}
server()
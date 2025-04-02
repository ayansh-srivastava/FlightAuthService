const express=require(`express`)
const {PORT}=require(`./config/serverConfig`);
const bodyParser = require("body-parser");
const apiroute=require(`./routes/index`)

const server=async ()=>{
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(`/api`,apiroute);
    await app.listen(PORT,()=>{
         console.log("Server started on PORT",PORT)
    }) 
}
server()
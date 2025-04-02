const express=require(`express`)
const {PORT}=require(`./config/serverConfig`);
const bodyParser = require("body-parser");
const apiroute=require(`./routes/index`)

const server=async ()=>{
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post(`/api/v2/users`,(req,res)=>{
        console.log(req.body);
        return res.status(201).json({
            msg:"tmkc"
        })
    })
    app.use(`/api`,apiroute);
    await app.listen(PORT,()=>{
         console.log("Server started on PORT",PORT)
    }) 
}
server()
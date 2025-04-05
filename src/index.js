const express=require(`express`)
const {PORT}=require(`./config/serverConfig`);
const bodyParser = require("body-parser");
const apiroute=require(`./routes/index`)
const sequelize=require(`sequelize`)

const server=async ()=>{
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    if(process.env.SYNC_DB){
        db.sequelize.sync({ alter: true })
        .then(()=>{
            console.log("DB snchronisation successful")
        }
        )
        .catch(error =>{
            console.log("Error snchronising",error)
        });}
        
    app.use(`/api`,apiroute);
    await app.listen(PORT,()=>{
         console.log("Server started on PORT",PORT)
    }) 
}
server()
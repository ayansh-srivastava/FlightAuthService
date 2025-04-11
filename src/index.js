const express=require(`express`)
const {PORT}=require(`./config/serverConfig`);
const bodyParser = require("body-parser");
const apiroute=require(`./routes/index`)
const sequelize=require(`sequelize`)
const db=require(`./models/index`)
const { User, Auth } = require('./models/index');

const server=async ()=>{
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
            
        // wrap in async function
        // console.log(User)
        // async function assignRoleToUser() {
        // const user = await User.findByPk(4);
        // const role = await Auth.findByPk(1);
        //     console.log(user,role)
        // if (user && role) {
        //     await user.addRole(role); // Sequelize magic method
        //     console.log('Role assigned successfully!');
        // } else {
        //     console.log('User or Role not found.');
        // }
        // }


    
    
    
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
        //  assignRoleToUser();
    }) 
}
server()
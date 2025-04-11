const repo=require(`../repository/authrepo`)
var jwt = require('jsonwebtoken');
const bcrypt=require(`bcrypt`)
const {pvtkey}=require(`../config/serverConfig`)
const UserRepo=new repo();

class UserServices{
    async create(data){
        try {
            const user=await UserRepo.create(data)
            return user;
        } catch (error) {
            console.log("Somthing went wrong in services");
        }
    }
    async signin(email,password){
        try {
            const user=await UserRepo.getByEmail(email);
            console.log(user)
            if(!this.checkPassword(password,user.password)){
                console.log("Wrong Password");
                throw{error:"Wrong password"};
            }
            console.log(user)
            const result=await jwt.sign(user.toJSON(),pvtkey,{expiresIn:"1d"})
            return result;
        } catch (error) {
            console.log("Something wrong with service signing in",error);
            throw(error);
        }
    }
    verifyUser(token){
        try {
        const result=jwt.verify(token,pvtkey);
        return result;   
        } catch (error) {
            console.log(error)
        }
    }
    async getuser(id){
        try {
            const user=await UserRepo.getuser(id);
            
            return user;
        } catch (error) {
            console.log(error)
        }
    }
    async checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return await bcrypt.compare(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.error("Something went wrong in password comparison:", error);
            throw error;
        }
    }
    async isAdmin(id) {
        try {
            return await UserRepo.isAdmin(id);
        } catch (error) {
            console.error("Something went wrong in password comparison:", error);
            throw error;
        }
    }
    
    

}
module.exports=UserServices
const { where } = require('sequelize');
const {User} = require('../models/index')
class UserRepo{
    async create(data){
        try {
            const user=await User.create(data)
            return user;
        } catch (error) {
            console.log("Something went wrong in repo",error);
        }
    }
    async getuser(id){
        try {
            const user=await User.findByPk(id,
                {attributes:[
                    'id',
                    'email'
            ]});
            return user;
        } catch (error) {
            console.log(error);
        }
    }
    async getByEmail(email){
        try {
            const user=await User.findOne({
                where: {
                    email:email
                }
            })
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports=UserRepo
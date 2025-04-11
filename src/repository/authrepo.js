const { where } = require('sequelize');
const {User,Auth} = require('../models/index')
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
    async isAdmin(id){
        try {
            const user=await User.findByPk(id,{
                include: {
                    model: Auth,
                    as: 'roles' // must match the alias defined in User.associate
                }
            });
            console.log(user)
            const isAdmin = user.roles.some(role => role.name === 'ADMIN');
            return {isAdmin};
        } catch (error) {
            console.log(error);

        }
    }
    
}
module.exports=UserRepo
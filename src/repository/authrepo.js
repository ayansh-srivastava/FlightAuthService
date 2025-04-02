const {User} = require('../models/index')

console.log("user is ",User)
class UserRepo{
    async create(data){
        try {
            console.log("repo",data)
            const user=await User.create(data)
            return user;
        } catch (error) {
            console.log("Something went wrong in repo",error);
        }
    }
}
module.exports=UserRepo
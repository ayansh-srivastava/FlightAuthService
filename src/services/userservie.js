const repo=require(`../repository/authrepo`)

const UserRepo=new repo();

class UserServices{
    async create(data){
        try {
            console.log(data);
            const user=await UserRepo.create(data)
            return user;
        } catch (error) {
            console.log("Somthing went wrong in services");
        }
    }
}
module.exports=UserServices
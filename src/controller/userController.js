const services=require(`../services/userservie`);
const userservices=new services();

const create=async (req,res) => {
    try {
    const user=await userservices.create(req.body);
    return res.status(201).json({
        data:user,
        success:true,
        error:{}
    });   
    } catch (error) {
        console.log("Something wrong in controller");
        return res.status(501).body({
            success:false,
            err:error
        })
    }
}
const getuser=async (req,res) => {
    try {
     
    const user=await userservices.getuser(req.params.id);
    return res.status(200).json({
        data:user,
        msg:"User found"
    })   
    } catch (error) {
      console.log(error);
      throw(error);  
    }
}
const signin=async (req,res) => {
    try {
        const token=await userservices.signin(req.body.email,req.body.password);
        return res.status(200).json({
            data:token,
            msg:"success"
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    create,
    getuser,
    signin
}
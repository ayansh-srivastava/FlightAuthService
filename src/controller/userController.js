const services=require(`../services/userservie`);
const userservices=new services();

const create=async (req,res) => {
    try {
     console.log(req.body)
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
module.exports={
    create
}
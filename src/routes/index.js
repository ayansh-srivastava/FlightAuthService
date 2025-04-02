const app=require(`express`)
const router=app.Router()
const v1apiroute=require(`./v1/index`)


router.use(`/v1`,v1apiroute);
module.exports=router
const app=require(`express`)
const router=app.Router();
const usercontroller=require(`../../controller/userController`);


router.post(`/users`,usercontroller.create);
module.exports=router;
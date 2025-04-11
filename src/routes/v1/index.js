const app=require(`express`)
const router=app.Router();
const usercontroller=require(`../../controller/userController`);


router.post(`/signup`,usercontroller.create);
router.post(`/signin`,usercontroller.signin);
router.get(`/user/:id`,usercontroller.getuser);
router.get('/isAdmin',usercontroller.isAdmin);
module.exports=router;
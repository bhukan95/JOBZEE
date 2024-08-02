import e from "express";
import {getUSer, login, logout, register} from '../controllers/userController.js'
import {isAuthrized} from '../middlewares/auth.js'
//import { register } from "module";
const router = e.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",isAuthrized,logout);
router.get("/getUser",isAuthrized,getUSer);

export default router;

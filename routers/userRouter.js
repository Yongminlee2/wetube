import express from "express";
import routes from "../routes";
import { userDetail,editprofile,changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile,editprofile);
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.userDetail(),userDetail);


export default userRouter;
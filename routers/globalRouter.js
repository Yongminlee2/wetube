import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { getjoin,postjoin,getLogin,postLogin,logout } from "../controllers/userController";
import {onlyPublic} from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join,onlyPublic,getjoin);
globalRouter.post(routes.join,onlyPublic,postjoin,postLogin);

globalRouter.get(routes.login,onlyPublic,getLogin);
globalRouter.post(routes.login,onlyPublic,postLogin);

globalRouter.get(routes.home,home);
globalRouter.get(routes.logout,logout);
globalRouter.get(routes.search,search);

export default globalRouter;
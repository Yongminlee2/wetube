import express from "express";
import routes from "../routes";
import { deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();


videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;
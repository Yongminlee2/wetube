import express from "express";
import routes from "../routes";
import { home,search,upload,viderDetail,editVideo,deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();


videoRouter.get(routes.upload,upload);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;
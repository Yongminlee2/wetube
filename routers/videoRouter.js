import express from "express";
import routes from "../routes";
import { getupload,postupload,videoDetail,editVideo,deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();


videoRouter.get(routes.upload,getupload);
videoRouter.post(routes.upload,postupload);

videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;
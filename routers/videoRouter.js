import express from "express";
import routes from "../routes";
import { getupload,postupload,videoDetail,geteditVideo,posteditVideo,deleteVideo } from "../controllers/videoControllers";
import {uploadVideo,onlyPrivate} from "../middlewares";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload,onlyPrivate,getupload);
videoRouter.post(routes.upload,onlyPrivate,uploadVideo,postupload);

//edit video
videoRouter.get(routes.editVideo(),onlyPrivate,geteditVideo);
videoRouter.post(routes.editVideo(),onlyPrivate,posteditVideo);

//video delete
videoRouter.get(routes.deleteVideo(),onlyPrivate,deleteVideo);

//video Detail
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;
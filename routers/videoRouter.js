import express from "express";
import routes from "../routes";
import { getupload,postupload,videoDetail,geteditVideo,posteditVideo,deleteVideo } from "../controllers/videoControllers";
import {uploadVideo} from "../middlewares";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload,getupload);
videoRouter.post(routes.upload,uploadVideo,postupload);

//edit video
videoRouter.get(routes.editVideo(),geteditVideo);
videoRouter.post(routes.editVideo(),posteditVideo);

//video delete
videoRouter.get(routes.deleteVideo(),deleteVideo);

//video Detail
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;
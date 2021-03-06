import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest : "uploads/videos/"});

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    //console.log(req.user);
    next();
}

export const onlyPublic = (req,res, next) =>{
    if(req.user){
        res.redirect(routes.home);
    }else { 
        next();
    }
}

export const onlyPrivate = (req,res, next) =>{
    if(req.user){
        next();
    }else { 
        res.redirect(routes.home);
    }
}
export const uploadVideo = multerVideo.single('videoFile');
//single 는 오직 하나의 파일만 upload 할수 있는걸 의미
// single 안에있는 이름은 html에서 video태그의 name 이다
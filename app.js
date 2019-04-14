import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import"./passport";

const app = express();

app.use(helmet());
app.set('view engine' , 'pug');
app.use("/uploads",express.static("uploads"))//directory 에서 파일을 보내주는 middleware
app.use("/static",express.static("static"))//directory 에서 파일을 보내주는 middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);
//app.use('url주소', 실행함수);
//여기에 기술된 app.use는 url의 앞부분
//router에 기재된 url은 여기 기재된 url/뒷부분

export default app;


//2- 18 강의 댓글 나도 궁금 퀴즈문제

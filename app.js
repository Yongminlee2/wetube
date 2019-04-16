import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleware,onlyPublic } from "./middlewares";

import"./passport";

const app = express();

const CokieStore = MongoStore(session);

app.use(helmet());
app.set('view engine' , 'pug');
app.use("/uploads",express.static("uploads"))//directory 에서 파일을 보내주는 middleware
app.use("/static",express.static("static"))//directory 에서 파일을 보내주는 middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized : false,
    store : new CokieStore({mongooseConnection: mongoose.connection})
})
);



//resave 는 세션을 강제로 저장하게 합니다.
//saveUninitialized 는 초기화 되지 않은 (uninitialized) 세션을 저장소에 저장합니다.
//새로운 세션이지만 변경되지 않은 세션은 초기화 하지 않습니다.
//로그인 session에 이용하려면 false가 좋다
//stor : new CokieStore 는 쿠키에 대한 정보를 몽고DB  에 저장하는것이다.
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


import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//const express = require('express');  //requre 는 module.exports를 리턴한다 (함수로 모듈을 가지고 온다.)


const app = express();
const PORT = 4000; // PORT 번호

const handlehome = (req,res) => {
  console.log("핸들홈");
  res.send("Hello From Home");
}

const handleProfile = (req,res) => {
  res.send("You are profile");
}

const betweenHome = (req,res,next) => {
  console.log("between hom")
  next();
};

//app.get('/',betweenHome,handlehome); //root로 접속한 경로에 response로 helloworld를 받아서 출력해준다

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.get('/profile',handleProfile);
// app.use(betweenHome);
app.get('/',handlehome);

console.log('시작');

const handleListening = () =>{ //애로우 함수로 펑션을 만들엇다.
    console.log(`Listening on : http://localhost:${PORT}`);
}


app.listen(PORT,handleListening); //port번호 설정
//node 실행 방법 node index.js




//https://academy.nomadcoders.co/courses/435438/lectures/6811583
// 2-7강 6:15분



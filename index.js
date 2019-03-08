
const express = require('express');  //requre 는 module.exports를 리턴한다 (함수로 모듈을 가지고 온다.)
const app = express();
const PORT = 4000; // PORT 번호

app.get('/', function(req, res) {
  res.send('hello world');
});  // 경로 / root로 접속한 경로에 response로 helloworld를 받아서 출력해준다

console.log('시작');

const handleListening = () =>{ //애로우 함수로 펑션을 만들엇다.
    console.log(`Listening on : http://localhost:${PORT}`);
}


app.listen(PORT,handleListening); //port번호 설정
//node 실행 방법 node index.js




//https://academy.nomadcoders.co/courses/435438/lectures/6811583
// 2-4강 1:49분



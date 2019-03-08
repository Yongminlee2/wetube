const express = require('express'); 
const app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});
// 경로 / root로 접속한 경로에 response로 helloworld를 받아서 출력해준다

console.log('시작');
app.listen(4000); //port번호 설정
//node 실행 방법 node index.js
const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname,"assets","js","main.js");
//path.resolve 는 이전경로는 무시하고 맨 마지막 경로만 출력 ex) path.resolve('/a', '/b') // Outputs '/b'
// 또한 path.resolve 는 항상 절대url 을 생성 그리고 이것을 만들기 위해 현재의 위치를 기본으로 사용


const OUTPUT_DIR = path.join(__dirname,"static");
//path.join 은 이전 인수까지 전부 출력  ex) path.join('/a', '/b') // Outputs '/a/b'
//__dirname는 파일의 절대경로

const config = {
    entry : ["@babel/polyfill", ENTRY_FILE], //entry 는 파일이 들어오는곳
    mode : MODE,
    module : { //module 이 의미하는건 module를 발견할떄마다 rules 라는 조건을 따르라고한다.
        rules: [//rules는 test의 정규식을 따른걸 만나면 use 를 사용한다.
            //rules는 특정 확장자의 파일을 브라우저가 이해할수있게 변환해준 역활을 한다
            {
                test :  /\.(scss)$/,
                use : [
                    {
                        loader : 'babel-loader' //js es6 문법을 구식으로 바꿔줌
                    }
                ]
            },
            {
                test: /\.(scss)$/,  //확장자가scss 인파일을 찾는다.
                //정규식 시작은 /\ 로시작하며 마지막엔 $/ 로 끝난다
                
                use: ExtractCSS.extract([ //use 의 plugin 은 내부에서 또다른 plugin을 사용하고있다.
                    //그 이유는 scss 파일을 일반적인 css 파일로 통역해야한다
                    {
                        //loader 란 건 기본적으로 webpack에게 파일을 처리하는 방법을 알려주는놈
                        loader: "css-loader" //이걸 사용해야 webpack 가 css를 이해한다
                    },
                    {
                        loader: "postcss-loader", //CSS의 호환성과 관련된걸 해결해줌 EX) IE 지원문법변환
                        options: {
                            plugins(){
                                return [autoprefixer({browsers : "cover 99.5%"})];
                            }
                        }
                    },
                    {
                        loader: "sass-loader" //scss or sass 를 일반 css로 바꿔주는 plugin
                    }
                ])
            }
            // 원래대로라면 프로그래밍은 처음부터 차례대로 진행되지만 config 에선 거꾸로 작업을 한다.
            // 그래서 sass파일읽고 -> post.css 호환성변환 -> css변환 이렇게 순서적으로 처리하는 작업을
            // 진행방향역순으로 loader를 써준다라 css로더 , 호환성변환 , sass 로더 를 사용한다
        ]
    },
    output : { //output 은 파일이 나가는곳 이다. output 은 객체여야 한다
        path : OUTPUT_DIR,
        filename : "[name].js" //[name].[format]" 파일의 이름과 파일의 확장자,형식 이다.
    },
    plugins: [new ExtractCSS("styles.css")] // use: ExtractCSS.extract 로 extract에 저장한 파일을 export 해준다
}; 

//entry 로 sass or scss 파일을 읽어서 css로변환해주고 그 변환된 파일을 output 으로 파일생성해준다.

module.exports = config;
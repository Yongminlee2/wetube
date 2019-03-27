import routes from "../routes";
import Video from "../models/Video"

const home = async (req,res) => { //async 함수 동기화 한다는 말임
    try {
        const videos = await Video.find({}); //await video를 db에서 다찾을떄까지 대기
        //throw Error("laalal");
        res.render('home',{pageTitle:"home",videos});
    } catch (error) {
        console.log(`ERROR : ${error}`);
        res.render('home',{pageTitle:"home",videos: []});
    }
};

const search = (req,res) => {
    //console.log(req.query.term); //serach.pug 의 input get 방식 값을 가져옴
    const {
        query: {term : searchingBy}
        } = req;
    //위와 동일 const searchingBy = {searchingBy : req.query.term};

    res.render('Search',{pageTitle:"Search",searchingBy,videos});
};


const getupload = (req,res) => {
    res.render('upload',{pageTitle:"Upload"})
};
const postupload = (req,res) => {
    const {body,file} = req;
    console.log(file,body);
    res.render('upload',{pageTitle:"Upload"})
    // To Do: Upload and save video
    //res.redirect(routes.videoDetail(324393));
};

const videoDetail = (req,res) => res.render('videoDetail',{pageTitle:"Video Detail"});
const editVideo = (req,res) => res.render('editVideo',{pageTitle:"Edit Video"});
const deleteVideo = (req,res) => res.render('deleteVideo',{pageTitle: "Delete Video"});


export {getupload,postupload,home,search,videoDetail,editVideo,deleteVideo};
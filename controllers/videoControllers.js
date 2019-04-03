import routes from "../routes";
import Video from "../models/Video"

const home = async (req,res) => { //async 함수 동기화 한다는 말임
    try {
        const videos = await Video.find({}).sort({_id:-1}); 
        //await video를 db에서 다찾을떄까지 대기
        //sort _id:-1 순서를 거꾸로 하겠다는 의미 desc

        //throw Error("laalal");
        res.render('home',{pageTitle:"home",videos});
    } catch (error) {
        console.log(`ERROR : ${error}`);
        res.render('home',{pageTitle:"home",videos: []});
    }
};

const search = async (req,res) => {
    //console.log(req.query.term); //serach.pug 의 input get 방식 값을 가져옴
    const {
        query: {term : searchingBy}
        } = req;
    //위와 동일 const searchingBy = {searchingBy : req.query.term};
    
    let videos = [];    
    try {
        videos = await Video.find({title : {$regex:searchingBy, $options:"i"}}); //정규식으로 select 쿼리 노래제목검색
    } catch (error) {
        console.log(error);
    }
    res.render('Search',{pageTitle:"Search",searchingBy,videos});
};


const getupload = (req,res) => {
    res.render('upload',{pageTitle:"Upload"})
};
const postupload = async (req,res) => {
    const {
        body: {title,description},
        file : {path}
    } = req;

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    
    res.redirect(routes.videoDetail(newVideo.id));
};

const videoDetail = async(req,res) => {
    const {
        params:{id} 
    } =req;
    try {
        const video = await Video.findById(id);
        //mongoose 가 url의 id 값을 인자로 넣어주면 _id값과 매핑되는지 자동으로 찾는다
        res.render('videoDetail',{pageTitle:video.title,video})
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

const geteditVideo = async(req,res) => {
    const {
        params: {id}
    } = req;
    try{
        const video =await Video.findById(id);
        res.render('editVideo',{pageTitle:`Edit ${video.title}`,video});
    } catch(error){
        res.redirect(routes.home);
    }
};

const posteditVideo = async (req,res) => {
    const {
        params: {id},
        body : {title,description}
    } = req;
    try {
        await Video.findOneAndUpdate({_id:id},{title,description});
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }

};


const deleteVideo = async (req,res) => {
    const {
        params:{id}
    } = req;
    try {
        await Video.findOneAndRemove({_id:id});
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
}

export {getupload,postupload,home,search,videoDetail,geteditVideo,posteditVideo,deleteVideo};
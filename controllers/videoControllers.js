import {videos} from "../db";

const home = (req,res) => {
    res.render('home',{pageTitle:"home",videos});
};

const search = (req,res) => {
    //console.log(req.query.term); //serach.pug 의 input get 방식 값을 가져옴
    const {
        query: {term : searchingBy}
        } = req;
    //위와 동일 const searchingBy = {searchingBy : req.query.term};

    res.render('Search',{pageTitle:"Search",searchingBy});
};


const upload = (req,res) => res.render('upload',{pageTitle:"Upload"});
const viderDetail = (req,res) => res.render('viderDetail',{pageTitle:"Video Detail"});
const editVideo = (req,res) => res.render('editVideo',{pageTitle:"Edit Video"});
const deleteVideo = (req,res) => res.render('deleteVideo',{pageTitle: "Delete Video"});


export {home,search,upload,viderDetail,editVideo,deleteVideo};
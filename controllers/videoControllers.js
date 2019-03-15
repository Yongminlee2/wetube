const home = (req,res) => res.render('home',{pageTitle:"home"});
const search = (req,res) => res.render('Search',{pageTitle:"Search"});
const upload = (req,res) => res.render('upload',{pageTitle:"Upload"});
const viderDetail = (req,res) => res.render('viderDetail',{pageTitle:"Video Detail"});
const editVideo = (req,res) => res.render('editVideo',{pageTitle:"Edit Video"});
const deleteVideo = (req,res) => res.render('deleteVideo',{pageTitle: "Delete Video"});


export {home,search,upload,viderDetail,editVideo,deleteVideo};
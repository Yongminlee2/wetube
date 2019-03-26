import routes from "../routes";

const getjoin = (req,res) => {
    res.render('Join',{pageTitle:"Join"});
};

const postjoin = (req,res) => {
    console.log(req.body);
    if(req.body.password !== req.body.password2){
        console.log('비밀번호틀림2');
        res.status(400);
    } else{
        //TO DO : Register User
        // to do : log user in
        res.redirect(routes.home);

    }
};

const getLogin = (req,res) => {
    res.render('login',{pageTitle:"login"});
};

const postLogin = (req,res) => {
    res.redirect(routes.home);
};

const logout = (req,res) => {
    //To Do : Process Log Out
    res.redirect(routes.home);
}

const editprofile = (req,res) => {
    res.render('editprofile',{pageTitle:"Edit Profile"});
};

const changePassword = (req,res) => {
    res.render('changePassword',{pageTitle:"changepassword"});
}

const userDetail = (req,res) => {
    res.render('userDetail',{pageTitle:"userDetail"});
}


export {getjoin,postjoin,getLogin,postLogin,logout,userDetail,editprofile,changePassword};
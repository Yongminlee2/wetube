import passport from "passport";
import routes from "../routes";
import User from "../models/User";

const getjoin = (req,res) => {
    res.render('Join',{pageTitle:"Join"});
};

const postjoin = async (req,res,next) => {
    const{
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join",{pageTitle: "Join"});
        console.log('비밀번호틀림2');
    } else{
        try {
            //const user = await User.create({
                //create는 생성시키고 db에 저장까지 해서
            const user = await User({
                name,
                email
            });
            await User.register(user,password);
            next();
        } catch (error) {
            console.log(error);
        }    
    }
};



const getLogin = (req,res) => {
    res.render('login',{pageTitle:"login"});
};

const postLogin = passport.authenticate('local',{
    failureRedirect: routes.login,
    successRedirect: routes.home
});
//지금 passport 인증방식은 username(여기선이메일) 과 password를 찾아보도록 설정되어있다.

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
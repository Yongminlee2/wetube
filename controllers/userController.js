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

const githubLogin = passport.authenticate("github");

const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    const {_json : { id, avatar_url, name, email}} = profile;
    try {
        const user = await User.findOne({email}); //_json의 email과 몽고db의 email이 같은게 있는가를 찾는다
        if(user){
            user.githubId = id;  // 깃헙에서 가져온 ID를 몽고DB에 있는 ID로 바꿔준다
            user.save();
            return cb(null,user); //이걸 쿠키에 저장한다. 자동으로
        } 
            //mongo의 db와 같은게 없으면 새로 아이디를 만든다 github 내용으로 mongoDB 에
            const newUser = await User.create({
                email,                           
                name,
                githubId : id,
                avatar_url : avatar_url
            });
            return cb(null,newUser);

    } catch (error) {
        return cb(error);
    }

    //console.log(accessToken, refreshToken, profile, cb);
    //625e12b7351d879a3a03b7722f3ccb9e24eddb11 , undefined , json { id: '42956429', cb 는

    /*cb 는 passport에서 호출하는 함수다 로그인이 성공한다면 이걸 호출해야한다
    function verified(err, user, info) {
        if (err) { return self.error(err); }
        if (!user) { return self.fail(info); }

        info = info || {};
        if (state) { info.state = state; }
        self.success(user, info);
    }*/

};

//cb는 passport로부터 제공되는것 함수인데 실행되면 passport에사 사용자가 성공적으로 로그인되었다고 알려준다.

const postGithubLogIn = (req,res) =>{
    res.redirect(routes.home);
};

const logout = (req,res) => {
    req.logout();
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


export {getjoin,postjoin,getLogin,postLogin,logout,userDetail,editprofile,changePassword,githubLoginCallback,githubLogin,postGithubLogIn};
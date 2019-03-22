const join = (req,res) => {
    res.render('Join',{pageTitle:"Join"});
};

const login = (req,res) => {
    res.render('login',{pageTitle:"login"});
};

const logout = (req,res) => {
    res.render('logout',{pageTitle:"logout"});
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


export {join,login,logout,userDetail,editprofile,changePassword};
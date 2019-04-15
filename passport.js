import passport from "passport";

import User from "./models/User";


passport.use(User.createStrategy());
//strategy 라는건 로그인 방식

passport.serializeUser(User.serializeUser()); //쿠키에 user.id 를 담는다
//serialization 어떤 정보를 쿠키에게 주느냐를 의미 (어떤 field가 쿠키에 포함될것인지)

passport.deserializeUser(User.deserializeUser()); //그 id로 사용자를 식별한다
//deserialization 어느사용자인지 어떻게 찾는가? 쿠키에 저장되어있는 userid로 어떻게 사용자를찾느냐를 의미
//세션이 쿠키를 해독해서 쿠키를 저장한걸로 세션이 찾는다

/*아래 코드를 줄여서 User.createStrategy() 이걸로 한줄 사용할수 있다.
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
        //이이디를 찾아주고
      if (err) { return done(err); }
        //에러나면 에러내밷고
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
        //아이디가 틀렷으면 아이디 틀렷다고 하고
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
        //패스워드 틀렷으면 패스워드 틀렷다고하고
      }
      return done(null, user);
    });
  }
));

*/
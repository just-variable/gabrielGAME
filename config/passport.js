const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const strategy = new LocalStrategy((username, password, done)=>{
    console.log(`[+] Authenticating: ${username}, ${password}...`);
    if(username == "test@gmail.com" && password == "test@123"){
        console.log(`[+] Authentication of ${username} success."`);
        return done(null, "1");
    }
    console.log(`[+] Authentication of ${username} failed"`);
    return done(null, false);
})

passport.use(strategy);

passport.serializeUser((user, done)=>{
    console.log(`serializing: ${user}`);
    done(null, user);
})

passport.deserializeUser((user, done)=>{
    if(user == "1"){
        done(null, "test");
    }
})

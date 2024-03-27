const {Strategy} = require("passport-jwt");
const fs = require("fs");

let PUB_key = fs.readFileSync("./id_rsa_pub.pem", "utf8");

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies.jwt) {
        token = req.cookies.jwt.token;
    }
    return token;
};

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: PUB_key,
    algorithms: ['RS256']
}

const strategy = new Strategy(options, (payload, done)=>{
    console.log(`payload from strategy: ${JSON.stringify(payload)}`)
    done(null, payload.sub);
})



module.exports = (passport)=>{
    passport.use(strategy);
};
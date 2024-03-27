const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");


const PRIV_KEY = fs.readFileSync("./id_rsa_priv.pem", "utf8");


function issueJWT(user) {
  
    const expiresIn = '1d';
  
    const payload = {
      sub: user,
      iat: Date.now()
    };
  
    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
  
    return {
      token: signedToken,
      expires: expiresIn
    }
  }


module.exports = {issueJWT};
const express = require("express");
const router = express.Router();
const path = require("path");
const {issueJWT} = require("../config/utils.js")


router.get("/", (req, res)=>{
    if(req.isAuthenticated()){
        res.redirect("/listing")
    }
    res.render(path.join(__dirname + '/static/login/index.ejs'), {err: req.query.err});
    res.end();
});


router.post("/", (req, res)=>{
    if(req.body.username == "test@gmail.com" && req.body.password == "test@123"){

        const token = issueJWT("1")

        res.cookie("jwt", token, {
            httpOnly: true,
        })

        res.status(200).redirect("/listing")
    } else {
        res.redirect("/login?err=1")
    }
});

module.exports = router;
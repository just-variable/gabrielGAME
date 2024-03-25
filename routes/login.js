const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");

router.get("/", (req, res)=>{
    if(req.isAuthenticated()){
        res.redirect("/listing")
    }
    res.render(path.join(__dirname + '/static/login/index.ejs'), {err: req.query.err});
    res.end();
});


router.post("/", passport.authenticate('local', {failureRedirect:"/login?err=1", successRedirect: "/listing"}));

module.exports = router;
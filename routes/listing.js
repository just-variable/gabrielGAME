const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");

router.get("/", passport.authenticate("jwt", {session: false}), (req, res)=>{
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    res.render(path.join(__dirname + '/static/listing/index.ejs'))
})


module.exports = router
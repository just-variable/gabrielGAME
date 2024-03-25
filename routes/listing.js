const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/",(req, res)=>{
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    res.render(path.join(__dirname + '/static/listing/index.ejs'))
})


module.exports = router
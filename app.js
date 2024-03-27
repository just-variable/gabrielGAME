const express = require("express");
const app = express();
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser")
require("dotenv").config();

const routes = require("./routes/0routes.js");

app.use(express.static(path.join(__dirname + "/routes/static")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use((req, res, next)=>{
    console.log(`[/] ${req.method} => ${req.url}, ${JSON.stringify(req.session)}`);
    next();
})



require("./config/passport.js")(passport)
app.use(passport.initialize());


app.use("/api", routes.api);
app.use("/login", routes.loginRoute);
app.use("/listing", routes.listingRoute)

app.use("*", (req, res)=>{
    res.redirect("/login");
});

app.listen(process.env.PORT, ()=>{
    console.log(`[+] Listening on port: ${process.env.port}`)
})
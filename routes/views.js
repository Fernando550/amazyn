const express = require("express");
const router = express.Router()

router.get("/login",(req,res)=>{
    res.render("login",{styles: "styles/login.css"});
})

router.get("/register",(req,res)=>{
    res.render("register");
})

router.get("/home",(req,res)=>{
    res.render("index",{address: "bl Wilfrid"});
})

module.exports = router;
const express = require("express");
const router = express.Router()

const products = [{name: "car"},{name: "T-short"},{name: "Wache"},{name: "T-short red"}]

router.get("/login",(req,res)=>{
    res.render("login",{message: ""});
})

router.get("/register",(req,res)=>{
    res.render("register");
})

router.get("/home",(req,res)=>{
    res.render("index",{
        address: "your address",
        Number_products: 0,
        products
    });
})

module.exports = router;
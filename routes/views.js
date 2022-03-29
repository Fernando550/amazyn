const express = require("express");
const router = express.Router()

const products = [
    {
        name: "car",
        price: 23,
        img: "https://cdn.shopify.com/s/files/1/1061/0606/products/Vandal_700b12c2-a966-46ce-a739-e636d2d32fda_grande.jpg?v=1541188695"
    },
    {
        name: "T-short",
        price: 23,
        img: "https://images.prismic.io/rushordertees-web/c46d32cd-469a-49a9-b175-7362171d29a7_Custom+Short+Sleeve+T-Shirt.jpg?auto=compress%2Cformat&rect=0%2C0%2C800%2C900&w=800&h=900"
    },
    {
        name: "Wache",
        price: 23,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1JyvhTXEy3ONVviJYMEdnJrSB0gTsVfyEg&usqp=CAU"
    },
    {
        name: "T-short red",
        price: 23,
        img: "https://static-01.daraz.pk/p/3a8c14f361e284dc7998b873882e4d74.jpg"
    }]

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
const express = require("express");
const router =  express.Router();
const ProductServices = require("../services/products.services");
const services = new ProductServices();
const boom = require("@hapi/boom");
const { checkApiKey } = require("../middlewares/auth.handlet");
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handlet");
const { id_ID } = require("faker/lib/locales");


router.get("/", 
passport.authenticate("jwt", {session: false}),
async(req, res, next) => {  
    try {
        console.log(req.isAuthenticated())
        const products = await services.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
})

router.get("/:id",
passport.authenticate("jwt", {session: false}), 
async(req, res, next) => { //
    try {
        const { id } = req.params
        const product = await services.findOne(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
})

router.post("/sellProduct", 
passport.authenticate("jwt",{session: false}),
checkRoles("Seller"),
async(req,res, next) => { 
    try {
        const body = req.body;
        const newProduct = await services.creatProduct(body);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
})

router.patch("/:id", 
passport.authenticate("local", {session: false}),
checkRoles("Seller"),
async(req, res, next) => {
    try {
        const { id } = req.params;
        const  body = req.body;
        const updateProduct = await services.update(id, body);
    res.json(updateProduct);
    } catch (error) {
        next(error);
    }
})

router.delete("/:id", 
passport.authenticate("local", {session: false}),
checkRoles("Seller"),
async(req,res, next) => {
    try {
        const { id } = req.params.id;
        const productDeleted = await services.delete(id);
        res.json(productDeleted);
    } catch (error) {
        next(error);
    }
})

module.exports  = router;
const express = require("express");
const router =  express.Router();
const ProductServices = require("../services/products.services");
const services = new ProductServices();
const boom = require("@hapi/boom");
const { checkApiKey } = require("../middlewares/auth.handlet");

router.get("/", checkApiKey,async(req, res, next) => {  
    try {
        const products = await services.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
})

router.get("/:id", async(req, res, next) => { //
    try {
        const { id } = req.params
        const product = await services.findOne(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
})

router.post("/", async(req,res, next) => { //
    try {
        const body = req.body;
        const newProduct = await services.creatProduct(body);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
})

router.patch("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const  body = req.body;
        const updateProduct = await services.update(id, body);
    res.json(updateProduct);
    } catch (error) {
        next(error);
    }
})

router.delete("/", async(req,res, next) => {
    try {
        const body = req.body;
        const productDeleted = await services.delete(body);
        res.json(productDeleted);
    } catch (error) {
        next(error);
    }
})

module.exports  = router;
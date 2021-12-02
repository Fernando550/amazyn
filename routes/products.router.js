const express = require("express");
const router =  express.Router();
const ProductServices = require("../services/products.services");
const services = new ProductServices();

router.get("/", async(req, res) => {  
    try {
        const products = await services.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
})

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params
        const product = await services.findOne(id);
        res.json(product);
    } catch (error) {
        res.status(404).json(error);
    }
})

router.post("/", async(req,res) => {
    try {
        const body = req.body;
        const newProduct = await services.creatProduct(body);
        res.json(newProduct);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const  body = req.body;
        const updateProduct = await services.update(id, body);
    res.json(updateProduct);
    } catch (error) {
        //
    }
})

router.delete("/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const productDeleted = await services.delete(id);
        res.json(productDeleted);
    } catch (error) {
        //
    }
})

module.exports  = router;
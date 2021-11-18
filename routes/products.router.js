const express = require("express");
const router =  express.Router();
const ProductServices = require("../services/products.services");
const services = new ProductServices();

router.get("/", (req, res) => {
    const products = services.find();
    res.json(products);
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const product = services.findOne(id);
    res.json(product);
})

router.post("/", (req,res) => {
    const body = req.body;
    const newProduct = services.creatProduct(body);
    res.json(newProduct);
})

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const  body = req.body;
    const updateProduct = services.update(id, body);
    res.json(updateProduct);
})

router.delete("/:id", (req,res) => {
    const { id } = req.params;
    const productDeleted = services.delete(id);
    res.json(productDeleted);
})

module.exports  = router;
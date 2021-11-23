const express = require("express");
const OrderServices = require("../services/orders.services.js");
const services = new OrderServices();
const router = express.Router();

router.get("/", (req,res) => {
    //const user = req.header
    const allOrders = services.find();
    res.json(allOrders);
});

router.get("/id:", (req,res) => {
    const { id } = req.params;
    const order = services.findOne(id);
    res.json(order);
});

router.post("/buy", (req,res) => {
    const body = req.body;
    const newOrder = services.crete(body);
    res.json(newOrder);
});

router.patch("/updateOrder/:id", (req, res)=> {
    const { id } = req.params;
    const body = req.body;
    const orderUpdate = services.update(id,body);
    res.json(orderUpdate);
})

router.delete("/delete",(req,res) => {
    const { id } = req.params;
    const orderDelete = services.delete(id);
    res.json(orderDelete);
})


module.exports = router;
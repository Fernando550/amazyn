const express = require("express");
const OrderServices = require("../services/orders.services.js");
const services = new OrderServices();
const router = express.Router();
const passport = require("passport")
const boom = require("@hapi/boom");

const { checkRoles } = require("../middlewares/auth.handlet");



router.get("/",   //get users orders
passport.authenticate("jwt",{session: false}),
checkRoles("BOS", "Seller"),
async (req,res, next) => {
    try {
        const allOrders = await services.find();
        res.json(allOrders);
    } catch (error) {
        console.log("routing")
        next(error);
    }
});

router.get("/:id",
passport.authenticate("jwt",{session: false}),
checkRoles("Bos", "Seller"),
async (req,res,next) => {
    try {
        const { id } = req.params;
        const order =  await services.findOne(id);
        res.json(order);
    } catch (error) {
        next(boom.badData());
    }
});

router.post("/buy",
passport.authenticate("jwt",{session: false}),
async (req,res,next) => {
    try {
        const user = req.user;
        const body = req.body;
        const newOrder = await services.createOrder(user.id,body);
        console.log(newOrder)
        res.json(newOrder);
    } catch (error) {
        console.log(error.message);
        next(error);
    }
});

router.patch("/:id", (req, res)=> {
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
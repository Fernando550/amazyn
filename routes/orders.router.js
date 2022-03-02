const express = require("express");
const OrderServices = require("../services/orders.services.js");
const services = new OrderServices();
const router = express.Router();
const passport = require("passport")

router.get("/",   //get user orders
passport.authenticate("jwt",{session: false}),
(req,res) => {
    const user = req.user
    const allOrders = services.find();
    res.json(allOrders);
});

router.get("/id:", (req,res) => {
    const { id } = req.params;
    const order = services.findOne(id);
    res.json(order);
});

router.post("/buy",
passport.authenticate("jwt",{session: false}),
async (req,res) => {
    const user = req.user;
    console.log("Id user:")
    console.log(user.id)
    const body = req.body;
    const newOrder = await services.create(user.id,body);
    res.json(newOrder);
});
//61a81cb45f2455295bdc5735 
//6215336cdb7ed12ac39153c0 f
//621536b1a65e2079b5a25023 a

//'620a8262789d27bb6b9b73c6' w, 
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
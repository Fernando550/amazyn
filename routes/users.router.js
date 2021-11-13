const express = require("express");
const router =  express.Router();
const userServices = require("../services/users.services")

const userService = new userServices()

router.get("/:id",(req,res)=> {   //send inf. of user
    const { id } = req.params;
    const user = userService.findCount(id);
    res.json(user);
})

router.get("/:id/car", (req,res)=> {  //show the car 
    const { id } = req.params;
    const userCar = userService.showCar(id);
    res.json(userCar);
})

router.get("/:id/order", (req, res)=> {
    const { id } = req.params;
    const userOrder = userService.showOrders(id);
    res.json(userOrder);
})

router.get("/:id/purchased", (req, res)=> {
    const { id } = req.params;
    const userPurchased = userService.showProductsPurchased(id);
    res.json(userPurchased);
})

module.exports = router;
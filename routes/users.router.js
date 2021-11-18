const express = require("express");
const router =  express.Router();
const userServices  = require("../services/users.services")

const service = new userServices()

router.get("/:id",(req,res)=> {   //send inf. of user
    const { id } = req.params;
    const user = service.findCount(id);
    res.json(user);
})

router.get("/:id/car", (req,res)=> {  //show the car 
    const { id } = req.params;
    const userCar = service.showCar(id);
    res.json(userCar);
})

router.get("/:id/order", (req, res)=> {
    const { id } = req.params;
    const userOrder = service.showOrders(id);
    res.json(userOrder);
})

router.get("/:id/purchased", (req, res)=> {
    const { id } = req.params;
    const userPurchased = service.showProductsPurchased(id);
    res.json(userPurchased);
})

//post

router.post("/newUser", (req, res) => {
    const body = req.body;
    const newUser = service.creatNewUser(body);
    res.json(newUser);
})

router.post("/getUser", (req, res) => {
    //
})

router.post("/:id/car", (req,res)=> {  //show the car 
    const { id } = req.params;
    const body = req.body;
    const userCar = service.addCar(id, body);
    res.json(userCar);
})

module.exports = router;
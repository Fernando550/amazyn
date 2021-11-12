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
    //
})

router.get("/:id/order", (req, res)=> {
    //
})

router.get("/:id/purchased", (req, res)=> {
    //
})

module.exports = router;
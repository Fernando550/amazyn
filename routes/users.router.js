const express = require("express");
const router =  express.Router();
const userServices  = require("../services/users.services");

const service = new userServices()

router.get("/", async (req,res) => {  //get all users
    try {
        const body = req.body;
        const users = await service.find(body);
        res.json(users);
    } catch (error) {
        res.json({
            message: error,
        })
    }
})

router.get("/:id", async (req,res)=> {   //send inf. of user
    try {
        const { id } = req.params;
        const user = await service.findCount(id);
        res.json(user);
    } catch (error) {
        //
    }
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

router.post("/", async(req, res) => {
    try {
        const body = req.body;
        const newUser = await service.creatNewUser(body);
        res.json(newUser);
    } catch(error){
        res.status(400).json(error);
    }
})


router.post("/:id/car", (req,res)=> {  //add car 
    const { id } = req.params;
    const body = req.body;
    const userCar = service.addCar(id, body);
    res.json(userCar);
})


// update
router.patch("/:id", async (req, res) => {
    try {
        const { id }= req.params;
        const body = req.body;
        const userUpdate = await service.update(id,body);
        res.json(userUpdate);
    } catch (error) {
        res.json({
            message: error
        });
    }
})

router.delete("/", async (req, res) => {
    try {
        const body = req.body;
        const userDeleted = await service.deleteCount(body);
        res.json(userDeleted);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;
const express = require("express");
const router =  express.Router();
const userServices  = require("../services/users.services");
const passport = require("passport");

const { checkRoles } = require("../middlewares/auth.handlet");

const service = new userServices()

router.get("/", 
passport.authenticate("jwt",{session: false}),
checkRoles("Administrator")
,async (req,res, next) => {  //get all users
    try {
        const body = req.body;
        const users = await service.find(body);
        res.json(users);
    } catch (error) {
        next(error);
    }
})

router.get("/:id", 
passport.authenticate("jwt",{session: false}),
checkRoles("Administrator"),
async (req, res, next)=> {   
    try {
        const { id } = req.params;
        const user = await service.findCount(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
})

router.get("/orders",
passport.authenticate("jwt",{session: false}),
(req, res, next)=> {
    try {
        const user = req.user;
        const userOrder = service.showOrders(user._id);
        res.json(userOrder);
    } catch (error) {
        next(error);
    }
})

router.get("/:id/purchased", (req, res, next)=> {
    try {
        const { id } = req.params;
        const userPurchased = service.showProductsPurchased(id);
        res.json(userPurchased);
    } catch (error) {
        next(error);
    }
})

//post

router.post("/newUser", async(req, res, next) => {
    try {
        const body = req.body;
        const newUser = await service.creatNewUser(body);
        res.json(newUser);
    } catch(error){
        next(error);
    }
})


router.post("/:id/car", (req,res, next)=> {  //add car 
    try {
        const { id } = req.params;
        const body = req.body;
        const userCar = service.addCar(id, body);
        res.json(userCar);
    } catch (error) {
        next(error);
    }
})


// update
router.patch("/:id", async (req, res, next) => {
    try {
        const { id }= req.params;
        const body = req.body;
        const userUpdate = await service.update(id,body);
        res.json(userUpdate);
    } catch (error) {
        next(error);
    }
})

router.delete("/", async (req, res, next) => {
    try {
        const body = req.body;
        const userDeleted = await service.deleteCount(body);
        res.json(userDeleted);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
const express = require("express");
const router =  express.Router();
const passport = require("passport");
const  boom = require("@hapi/boom");
const AuthService  = require("../services/auth.service");
const UserService  = require("../services/users.services");
const {checkAuthenticated,checkRedirectHome} = require("../middlewares/redirect");

const Auth = new AuthService();
const Users = new UserService();
require("dotenv").config();



router.post("/Sing-in",async (req,res,next)=> {
    try {
        const body = req.body;
        const newUser = await Users.creatNewUser(body);
        res.json(newUser);
    } catch (error) {
        next(boom.badData());
    }
})

router.post("/login", 
passport.authenticate("local", {session: false}),
async (req, res, next) => {
    try {
        const user = req.user;
        const token = await Auth.signToken(user._id);
        res.cookie("token", token)
        res.render("index");
    } catch (error) {
        next(error);
    }
})

router.post("/recovery",
async (req, res ,next)=> {
    try {
        const { email } = req.body;
        const rta = await Auth.sendRecovery(email);
        res.json(rta);
    } catch (error) {
        next(error);
    }
})

router.post("/change-password",
async (req, res ,next)=> {
    try {
        const { token, newPassword } = req.body;
        const rta = await Auth.changePassword(token, newPassword);
        res.json(rta);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
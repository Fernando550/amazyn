const express = require("express");
const router =  express.Router();
const passport = require("passport");

const AuthService  = require("../services/auth.service");
const Auth = new AuthService();
require("dotenv").config();




router.post("/login", 
passport.authenticate("local", {session: false}),
async (req, res, next) => {
    try {
        const user = req.user;
        const token = await Auth.signToken(user._id);
        res.json({
            user,
            token
        });
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
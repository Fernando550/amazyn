const express = require("express");
const router =  express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const secret = process.env.Secret;



router.post("/login", 
passport.authenticate("local", {session: false}),
async (req, res, next) => {
    try {
        const user = req.user;
        const  payload = {
            id: user._id,
            scope: user.role,
        }
        const token = jwt.sign(payload, secret);
        console.log(token)
        res.json({
            user,
            token
        });
        // res.json(req.user)
    } catch (error) {
        console.log("login 5 -)")
        next(error);
    }
})


module.exports = router;
const express = require("express");
const router =  express.Router();
const passport = require("passport");


router.post("/login", passport.authenticate("local", {session: false}),
async (req, res) => {
    try {
        // console.log("login")
        res.json(req.user);
    } catch (error) {
        console.log("login")
        next(error);
    }
})


module.exports = router;
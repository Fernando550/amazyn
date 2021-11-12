const express = require("express");
const usersRouter = require("./users.router");

function routerApi(app){
    const router = express.Router();
    app.use("/amazyn", router);
    router.use("/home", express.static("public")); //html
    router.use("/user", usersRouter);
}

module.exports = routerApi;
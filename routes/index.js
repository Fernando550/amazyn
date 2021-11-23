const express = require("express");
const usersRouter = require("./users.router");
const productRouter = require("./products.router");
const ordersRouter = require("./orders.router");

function routerApi(app){
    const router = express.Router();
    app.use("/amazyn", router);
    router.use("/home", express.static("public")); //html
    router.use("/user", usersRouter);
    router.use("/products", productRouter);
    router.use("/orders", ordersRouter);
}

module.exports = routerApi;
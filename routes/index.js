const express = require("express");
const usersRouter = require("./users.router");
const productRouter = require("./products.router");
const ordersRouter = require("./orders.router");
const authRouter = require("../routes/auth.router");
const viewsRouter = require("./views")

function routerApi(app){
    const router = express.Router();
    app.use("/amazyn", router);
    router.use("/", viewsRouter); //html
    router.use("/user", usersRouter);
    router.use("/products", productRouter);
    router.use("/orders", ordersRouter);
    router.use("/auth", authRouter);
}
module.exports = routerApi;
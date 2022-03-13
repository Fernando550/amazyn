const express = require("express");
const app =  express();
const  port = 3000;
const routerApi = require("./routes/index");
const db = require("./connectionDatabase");
const {logErrors, errorHandler,boomErrorHandler} = require("./middlewares/error.handler");
const cors = require("cors");
app.use("/",express.static("public"))

app.use(express.json()); 
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: "*"
}))

require("./utils/index");

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
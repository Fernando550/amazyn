const express = require("express");
const app =  express();
const  port = 3000;
const routerApi = require("./routes/index");
const db = require("./connectionDatabase");
const {logErrors, errorHandler,boomErrorHandler} = require("./middlewares/error.handler");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");


app.use(express.json());  
//form
app.use(express.urlencoded({extended: false})) 
app.use(cors({
    origin: "*"
}))

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layout/layout");
app.use(expressLayouts);
app.use(express.static("public"))

require("./utils/index");

routerApi(app);

// app.use()

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
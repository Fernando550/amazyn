const express = require("express");
const app =  express();
const  port = 3000;
const routerApi = require("./routes/index");
const db = require("./connectionDatabase");
const {logErrors, errorHandler,boomErrorHandler} = require("./middlewares/error.handler");

app.use(express.json()); 

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
function logErrors(err, req,res,next){
    console.log("Error:");
    console.log(err);
    next(err);
}

function errorHandler(err,req,res,next){
    console.log("error Handle")
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
}

function boomErrorHandler(err,req,res,next){
    if(err.isBoom){
        const { output } = err;
        res.status(output.statusCode);
    }
    next(err);
}

function viewErrorLog(err,req,res,next) {
    if(err.isBoom){
        const {payload} = err.output;
        if(payload.message == "Not Acceptable"){
            console.log("not acceptable")
            console.log(err)
            res.render("login",{message: "Email or Password incorrect"});
        }
    }
    console.log("nose")
    console.log(err)
    next();
}


module.exports = {logErrors, errorHandler, boomErrorHandler,viewErrorLog};
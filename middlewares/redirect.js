
function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()) {
        next();
    }
    res.redirect("/login");
}
function checkRedirectHome(req,res,next){
    const auth = req.isAuthenticated;
    if(auth) {
        res.redirect("/home")
    }
    next()
}

module.exports = {checkAuthenticated,checkRedirectHome};
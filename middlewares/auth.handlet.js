const boom = require("@hapi/boom");

require("dotenv").config();

let Api_key = process.env.Api_key


function checkApiKey(req,res, next){
    const apiKey = req.headers['api']
    if(apiKey === Api_key){
        next();
    } else {
        next(boom.unauthorized());
    }
}

function checkRoles(...roles){
    return (req, res, next) => {
        const user = req.user;
        if(roles.includes(user.scope)){
            next();
        } else {
            next(boom.unauthorized());
        }
    }
}
module.exports = {checkApiKey, checkRoles};

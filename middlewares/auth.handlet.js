const boom = require("@hapi/boom");

// const { config } = require("./.env")
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
module.exports = {checkApiKey};

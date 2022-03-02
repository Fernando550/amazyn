const jwt = require("jsonwebtoken");
require("dotenv").config();

const  secret = "myCat";
const  payload = {
    sub: 1,
    scope: "costumer",
}

function singToken(payload, secret) {
    return jwt.sign(payload, secret);
}

const token = singToken(payload, secret);
console.log(token)


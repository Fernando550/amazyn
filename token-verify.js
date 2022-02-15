const jwt = require("jsonwebtoken");

const  secret = "myCat";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY29zdHVtZXIiLCJpYXQiOjE2NDQ4NTIzOTZ9.8zPAP_WKr3s8WwCQx9EklsDNTeYhFCTKQZJ-bikzcqs";

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);

console.log(payload);

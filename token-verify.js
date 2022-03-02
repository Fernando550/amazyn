const jwt = require("jsonwebtoken");
const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY29zdHVtZXIiLCJpYXQiOjE2NDYyNDMyNTl9.c3CMk1OTtAQFc5WOQvDd_kciywZ8JapYmE2sz-D4AFE";
const secret1 = "myCatu";

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}
const payload = verifyToken(token1, secret1);

console.log(payload);

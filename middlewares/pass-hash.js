const bcrypt = require("bcrypt");

let pass = "polipoli";

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10); 
    console.log(hash)
}

hashPassword(pass)
// console.log(awaithashPassword(pass))

// module.exports = { hashPassword }
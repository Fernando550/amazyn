const bcrypt = require("bcrypt");

let pass = "secret";

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10); 
    console.log(hash)
}

hashPassword(pass)
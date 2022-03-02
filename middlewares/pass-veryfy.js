const bcrypt = require("bcrypt");

const myPassWord = "Mi mama me mima 23";

async function verifyPassword(password) {
    const hash = await bcrypt.compare(myPassWord, password); 
    console.log(hash); 
}

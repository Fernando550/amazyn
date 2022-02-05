const bcrypt = require("bcrypt");

const myPassWord = "Mi mama me mima 23";

async function hashPassword() {
    const hash = await bcrypt.hash(myPassWord, 10); 
    console.log(hash); 
}





hashPassword();
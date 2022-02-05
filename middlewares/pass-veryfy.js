const bcrypt = require("bcrypt");

const myPassWord = "Mi mama me mima 23";
// "$2b$10$zSaxVXVaFTnc8umIflpLmemtHz5V.GzZlsgk6WRFczVQYjZ5IbvvS"

async function verifyPassword(password) {
    const hash = await bcrypt.compare(myPassWord, password); 
    console.log(hash); 
}

verifyPassword();
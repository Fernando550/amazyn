const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/amazynBase")

const UserService = require("./userSchema");
const Order = require("../modelsDb/ordersSchema");

async function run(){
    try{
        const user = await UserService.findById({_id: "621536b1a65e2079b5a25023"});
        console.log("User")
        console.log(user)
    } catch(e) {
        console.log(e.message)
    }
}
run()

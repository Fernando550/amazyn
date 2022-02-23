const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/amazynBase")

const UserService = require("./userSchema");
const Order = require("../modelsDb/ordersSchema");

async function run(){
    try{
        const user = await UserService.findById({_id: "621536b1a65e2079b5a25023"});
        console.log(user)
        user.car = ["61a81f775abb068665fccbcf", "61b25b9e98ea25ee0f285536"]
        console.log("User")
        await user.save()
        console.log(user)
    } catch(e) {
        console.log(e.message)

    }
}
run()

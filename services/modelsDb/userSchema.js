const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    wishList: [],
    car: [],
    orders: []
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
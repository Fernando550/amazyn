const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    password: String,
    role: String,
    wishList: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "products"
    }],
    car: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "products"
    }],
    orders: [ {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "orders"
    }],
    jwtRecovery: String
})

const userModel = mongoose.model("users", userSchema);


module.exports = userModel;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    image: String,
});


const modelProducts = mongoose.model("products", productSchema);

const users = [
    {
        id: 1,
        name: "Fernando",
        email: "fernando268a@gmail.com",
        password: "hello",
        address: "7655 BL wilfrid Hamell",
        car: [
            "arduino Uno",
            "Steppers Motors",
        ]
    },
    {
        id: 2,
        name: "Tomas",
        email: "tomas@gmail.com",
        password: "hp",
        address: "7656 BL wilfrid Hamell"
    }
]



module.exports = {users, modelProducts};
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    image: String,
});

const product = mongoose.model("products", productSchema);
module.exports = product;






// module.exports = {users, modelProducts};
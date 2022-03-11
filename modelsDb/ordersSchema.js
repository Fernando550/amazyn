const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "products"
    }],
    cost: Number,
    datePurchase: Date,
    dateArrive: Date,
    delivered: {
        type: Boolean,
        default: false
    }
})

const orderModel = mongoose.model("orders",orderSchema);

module.exports = orderModel;
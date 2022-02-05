const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    client: mongoose.SchemaTypes.ObjectId,
    product: [mongoose.SchemaTypes.ObjectId],
    cost: Number,
    datePurchase: Date,
    dateArrive: Date
})

const orderModel = mongoose.model("orders",orderSchema);

module.exports = orderModel;
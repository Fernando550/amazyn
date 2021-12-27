const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    client: mongoose.SchemaType.objectId,
    address:mongoose.SchemaType.objectId,
    product: mongoose.SchemaType.objectId,
    datePurchase: Date,
    dateArrive: Date,
})

const orderModel = mongoose.model("orders",orderSchema);

module.exports = orderModel;
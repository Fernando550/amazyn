const Order = require("./modelsDb/ordersSchema");

class OrderServices{
    constructor(){
        // this.id;
    }
    async crete(body){  //buy
        try {
            const newOrder = await Order.crete(body);
            return newOrder;
        } catch (error) {
            return error;
        }
    }
    async find(){
        try {
            const orders = await Order.find();
            return order;
        } catch (error) {
            return error;
        }
    }
    async findOne(id){
        try {
            const order = await Order.find({_id: id});
            return order;
        } catch (error) {
            return error;
        }
    }
   
    async delete(body){
        try {
            await Order.deleteOne(body);
            return { message: "The Order has been deleted with success!"};
        } catch (error) {
            return error;
        }
    }
    async update(id,changes){
        try {
            const orderUpdate = await Order.findByIdAndUpdate(id,changes);
            const order = await Order.findById(id);
            return order;
        } catch (error) {
            return error;
        }
    }
}

module.exports = OrderServices;
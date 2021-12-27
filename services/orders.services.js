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
            
        }
    }
    async find(){
        try {
            const orders = await Order.find();
            return order;
        } catch (error) {
            
        }
    }
    findOne(id){
        const myOrder = this.ordersDatabase.find(order => order.id == id);
        return myOrder;
    }
   
    delete(id){
        const index = this.ordersDatabase.findIndex(order => order.id == id);
        this.ordersDatabase[index]
        this.ordersDatabase.splice(index,1);
        return this.ordersDatabase[index];
    }
    update(id,changes){
        const index = this.ordersDatabase.findIndex(item => {item.id == id});
        const order = this.ordersDatabase[index];
        this.ordersDatabase[index] = {
            ...order,
            ...changes
        };
        return this.ordersDatabase[index];
    }
}

module.exports = OrderServices;
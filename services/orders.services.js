class Order {
    constructor(){
        this.id;
        this.ordersDatabase = [];
    }
}

class OrderServices{
    constructor(){
        this.id;
    }
    find(){
        return this.ordersDatabase
    }
    findOne(id){
        const myOrder = this.ordersDatabase.find(order => order.id == id);
        return myOrder;
    }
    crete(body){  //buy
        const order = new Order(body);
        return order;
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
const  User  = require("./modelsDb/userSchema");

class usersServices {
    constructor(){
        // this.database = usersDatabase;
    }

    async creatNewUser(data){
        try {
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            return error;
        }
    }

    async find(body){
        try {
            const users = await User.find(body);
            return users;
        } catch (error) {
            return error;
        }
    }

    async findCount(id){
        try {
            const myAccount = await User.findById(id)
            return myAccount;
        } catch (error) {
            return error;
        }
    }

    async update(id, changes){
        try {
            const userUpdate = await User.findByIdAndUpdate(id,changes);
            const user = await User.findById(id);
            return user;
        } catch (error) {
            return error;
        }
    }

    async deleteCount(body){
        try {
            await ProductSch.deleteOne(body);
            return { message: "The product has been deleted with success!"};
        } catch (error) {
            return
        }
    }

    showCar(id){
        const user = this.findCount(id);
        return user.car;
    }

    addCar(id,item){
        const user = this.findCount(id);
        user.car.push(item);
        return user.car;
    }

    showOrders(id){
        const user = this.findCount(id);
        return user.orders;
    }

    showProductsPurchased(id){
        const user = this.findCount(id);
        return user.productsPurchased;
    }
}

module.exports = usersServices;
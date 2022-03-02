const  User  = require("../modelsDb/userSchema");
const bcrypt = require("bcrypt");
class usersServices {
    constructor(){
        // this.database = usersDatabase;
    }

    async creatNewUser(data){
        try {
            const hash = await bcrypt.hash(data.password, 10);
            const newData = {
                ...data,
                password: hash,
            }
            const newUser = await User.create(newData);
            delete newUser.password;
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

    async finByEmail(email){
        const user = await User.where("email").equals(email);
        return user;
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
            await User.findByIdAndUpdate(id,changes);
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
            return error
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
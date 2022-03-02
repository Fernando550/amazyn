const  User  = require("../modelsDb/userSchema");
const bcrypt = require("bcrypt");
class usersServices {
    constructor(){
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
            const user = await User.findById(id);
            user = {
                ...user,
                ...changes
            };
            user.save();
            return user;
        } catch (error) {
            return error;
        }
    }

    async deleteCount(body){
        try {
            await User.deleteOne(body);
            return { message: "User has been deleted with success!"};
        } catch (error) {
            return error
        }
    }

    async deleteCountById(id){
        try {
            const user = await User.findById(id);
            await User.deleteOne(user);
            return { message: "User has been deleted with success!"};
        } catch (error) {
            return error
        }
    }

    async showCar(id){
        try {
            const user = await this.findCount(id);
            return user.car;
        } catch (error) {
            return error;
        }
    }

    async addCar(id,item){
        try {
            const user = await this.findCount(id);
            user.car.push(item);
            await user.save();
            return user.car;
        } catch (error) {
            return error;
        }
    }

    showOrders(id){
        const user = this.findCount(id);
        return user.orders;
    }

}

module.exports = usersServices;
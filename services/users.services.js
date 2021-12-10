const { usersDatabase } = require("./modelsDb/productSchema");

class User {
    constructor({
        name,
        email,
        password,
        address,
    }){
        this.id = this.randomId(2);
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.wishList = [];
        this.car = [];
        this.orders = [];
        this.productsPurchased = [];
    }

    randomId(length){
        const characters = ["a","e","i","o","u"];
        const numbers = [1,2,3,4,5,6,7,8,9,0];
        let id = "";

        for (let index = 1; index <= length; index++) {
            const letterRandom = characters[this.random(0,4)];
            id = id + letterRandom;
        }
        id = id + numbers[this.random(0,9)];
        return id;
    }
    random(min, max){
        const number = Math.floor((Math.random() * max) + min);
        return number;
    }
}

class usersServices {
    constructor(){
        // this.database = usersDatabase;
    }

    creatNewUser(data){
        const newUser = new User(data);
        usersDatabase.push(newUser);
        return newUser;
    }

    findCount(id){
        const myAccount = usersDatabase.find(use => use.id == id);
        return myAccount;
    }

    deleteCount(id){
        const index = usersDatabase.findIndex(user => user.id == id);
        const user = this.findCount(id)
        this.database.pop(index);
        return {message: `User ${user} has been deleted`};
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
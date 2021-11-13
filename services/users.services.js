const usersDatabase = require("./dataBase");

class User {
    constructor({
        name,
        email,
        password,
        address,
    }){
        this.id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.wishList = [];
        this.car = [];
        this.orders = [];
        this.productsPurchased = [];
    }
}

class usersServices {
    constructor(){
        // this.database = usersDatabase;
    }

    creatNewUser(data){
        const newUser = new User(data);
        this.database.push(newUser);
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
        return `User ${user} has been deleted`;
    }

    showCar(id){
        const user = this.findCount(id);
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
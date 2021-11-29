const faker = require("faker");
const { products }= require("./dataBase");

class Product {
    constructor(){
        //
    }
}
class ProductsServices {
    constructor(){
        this.products = products;
        this.generate(50);
    }

    async generate(limit){
        for (let index = 0; index <  limit; index++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl(),
            isBlock: faker.datatype.boolean(),
        })
        }
    }

    async creatProduct(body){
        products.push(body);
    }
    
    async find(){
        return products;
    }

    async findOne(id){
        const product =  products.find(item => item.id === id);
        return product;
    }

    async delete(id){
        const index = products.findIndex(item => {item.id == id});
        products.splice(index,1);
        return { message: "The product has been deleted with success!" };
    }

    async update(id, changes){
        const index = products.findIndex(item => {item.id == id});
        const product = products[index];
        products[index] = {
            ...product,
            ...changes
        };
        return products[index];
    }
}

module.exports = ProductsServices;
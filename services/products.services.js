const faker = require("faker");
const { modelProducts } = require("./dataBase");
const boom = require("@hapi/boom");
const db = require("./connectionDatabase");

// const Schema = db.Schema;
class ProductsServices {
    constructor(){
        // this.generate(50);
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
        const newProduct = new modelProducts(body);
        newProduct.save();
        return newProduct;
    }
    
    async find(){
        const products = await modelProducts.find();
        return products;
    }

    async findOne(id){
        const productFound = await modelProducts.findOne({
            _id: id
        });
        return productFound;
    }

    async delete(id){
        const opjDeleted = modelProducts.findOneAndDelete(id);
        return { message: "The product has been deleted with success!",
                opjDeleted };
    }

    async update(id, changes){
        const opj = await modelProducts.findByIdAndUpdate(id,changes);
        return opj;
    }
}

module.exports = ProductsServices;
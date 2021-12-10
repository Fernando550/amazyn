const faker = require("faker");
const  ProductSch  = require("./modelsDb/productSchema");
const boom = require("@hapi/boom");

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
            // isBlock: faker.datatype.boolean(),
        })
        }
    }

    async creatProduct(body){
        const newProduct = new ProductSch(body);
        newProduct.save();
        return newProduct;
    }
    
    async find(){
        const products = await ProductSch.find();
        return products;
    }

    async findOne(id){
        const productFound = await ProductSch.findOne({
            _id: id
        });
        return productFound;
    }

    async delete(body){
        await ProductSch.deleteOne(body);
        return { message: "The product has been deleted with success!"};
    }

    async update(id, changes){
        const obj = await ProductSch.findByIdAndUpdate(id,changes);
        const product = await ProductSch.findById(id);
        return product;
    }
}

module.exports = ProductsServices;
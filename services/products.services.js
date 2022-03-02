const faker = require("faker");
const  ProductSch  = require("../modelsDb/productSchema");
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
        try {
            const newProduct = new ProductSch(body);
            newProduct.save();
        return newProduct;
        } catch (error) {
            boom.badData("Your data is bad");
        }
    }
    
    async find(){
        const products = await ProductSch.find();
        return products;
    }

    async findOne(id){
        try {
            const productFound = await ProductSch.findOne({
            _id: id
            });
        return productFound;
        } catch (error) {
            throw boom.notFound("product not found");
        }
    }

    async delete(body){
        try {
            await ProductSch.deleteOne(body);
            return { message: "The product has been deleted with success!"};
        } catch (error) {
            boom.notFound("product not found");
        }
    }

    async update(id, changes){
        try {
            const obj = await ProductSch.findByIdAndUpdate(id,changes);
            const product = await ProductSch.findById(id);
        return product;
        } catch (error) {
            boom.conflict("There's something wrong");
        }
    }
}

module.exports = ProductsServices;
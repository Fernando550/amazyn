const faker = require("faker");
const  ProductSch  = require("../modelsDb/productSchema");
const boom = require("@hapi/boom");


class ProductsServices {
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
        try {
            const products = await ProductSch.find();
            return products;
        } catch (error) {
            return error;
        }
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

    async delete(id){
        try {
            const product = await ProductSch.findById(id);
            await ProductSch.deleteOne(product);
            return { message: `The product ${product._id} has been deleted with success!`};
        } catch (error) {
            boom.notFound("product not found");
        }
    }

    async update(id, changes){
        try {
            const product = await ProductSch.findById(id);
            product = {
                ...product,
                ...changes
            }
            await product.save();
        return product;
        } catch (error) {
            boom.conflict("There's something wrong");
        }
    }
    randomNumber(min,max){
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        return random;
    }
    arrayRandom(){
        let positions = [];
        while(positions.length <= 12){
            const position = this.randomNumber(0,11)
            if (!positions.includes(position)) {
                positions.push(position);
            }
        }
        return positions;
    }
    async showProducts(){
            const products = await ProductSch.find();
            let positions = this.arrayRandom();
            let positionA = 0;
            let productsToShow = [];

            for (let i = 0; i < 3; i++) {
                for(let e = 0; e < 4; e++){
                    productsToShow[i][e].push(products[positions[positionA]])
                    positionA++;
                }
            }
            return productsToShow;
    }
}

module.exports = ProductsServices;
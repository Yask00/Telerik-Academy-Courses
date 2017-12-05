function solve() {
    class Product {
        constructor(productType, name, price){
            //	new Product("Sweets", "Shokolad Milka", 2);
            this.productType = productType;
            this.name = name;
            this.price = +price; //+ 
        }
    }

    class ShoppingCart {
        
        constructor(){ //	No parameters
            // example new ShoppingCart();
            this.products = []; //Public properties: products: Array
        }

        add(product){ //parameter: Product or Product-like object
            this.products.push(product); //was _products and not working

            return this; //Should provide chaining
        }

        remove(product){ //parameter: Product or Product-like object

            //There are not products in the ShoppingCart instance
            if (!this.products.length) {
                throw new Error (`Empty cart`);
            }
            //The ShoppingCart instance does not contain this product
            let index = this.products.findIndex(pr => pr.name === product.name && pr.productType === product.productType && pr.price === product.price);

            if (index < 0) {
                throw new Error(`No such product in cart`);
            }

            //remove if exist - most left
            this.products.splice(index, 1);
            return this;
        }

        showCost(){ //no parameters
            let sum = 0;

            for(let prod of this.products){
                sum += +(prod.price);
            }

            return sum;
        }

        showProductTypes(){ //no parameters
            //only uniques
            var productTypes = [];

            for (var i = 0; i < this.products.length; i += 1) { //! this.
                if (!productTypes.includes/*not contains*/(this.products[i].productType)) { //! this.
                    productTypes.push(this.products[i].productType); //! this.
                }
            }

            return productTypes.sort();
        }

        getInfo(){ //no parameters
            //Returns an object 
            /* prints
                {
                    totalPrice: 3
                    products: [{
                        name: "Salad",
                        totalPrice: 1,
                        quantity: 2
                    }, {
                    name: "Shokolad Milka",
                    totalPrice: 2,
                    quantity: 1 
                    }]
                }
            */
            let groupedByName = {}; //for every productType, increasing price and quantity

            for(let product of this.products){
                if (!groupedByName[product.name]) {
                    groupedByName[product.name] = {
                        name: product.name,
                        totalPrice: 0,
                        quantity: 0
                    };
                }
                groupedByName[product.name].totalPrice += product.price;
				groupedByName[product.name].quantity += 1;
            }

            //is not working ???????  let totalPrice = showCost();

            //moved to simple solution ----> 107 row
            //let sum = 0;
            //for(let prod of this.products){
            //    sum += +(prod.price);
            //}

            //let totalPrice = sum;
            let allProducts = Object.keys(groupedByName).map(groupName => groupedByName[groupName]);

            return {
                totalPrice: this.showCost(),
                products: allProducts // is []
            };
        }
    }
    return {
        Product,
        ShoppingCart
    };
}

module.exports = solve;

//  50/100 with constructors(), add() and remove()
//  85/100 with showCost() and showProductTypes()
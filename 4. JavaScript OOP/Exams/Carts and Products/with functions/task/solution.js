function solve() {

	function getProduct(productType, name, price) {

		return {
			productType: productType,
			name: name,
			price: price
		};

		//{ productType: 'Sweets', name: 'Shokolad Milka', price: 2 }
	}

	
	function getShoppingCart() { // no parameters
		let products = [];

		function add (product) {
			products.push(product); //this.products.push() is the same as products.push()

			return this; //was products, for providing chaining
						 //this is the object on which
						 //.add().add().add() 
		}

		function remove(product) {

			if (!products) {
				throw new Error('There are no products in the shopping card!');
			}

			if (!products.includes(product)) {
				throw new Error('There is no such product in the shopping card!');
			} 

			for (let i = 0, len = products.length; i < len; i += 1) {
				let currProduct = products[i];

				if (product.productType === currProduct.productType &&
					product.name === currProduct.name &&
					product.price === currProduct.price) {
					products.splice(i, 1); //var prod = products.splice(i, 1); //prod = i
					break;
				}
			}

			return this; 
		}	

	  	function showCost () {
			var sum = 0;

			products.forEach(pr => {
              sum += pr.price;
            });

			return sum;
		}

		function showProductTypes () {
			var productTypes = [];

			for (var i = 0; i < products.length; i+=1) {
				if (!productTypes.includes(products[i].productType)) { //was contains and not working
					productTypes.push(products[i].productType);
				}
			}

			return productTypes.sort(); //return productTypes; was not working
		}

		function getInfo () {

			let productInfo = {};

			for (var product of products){

				if (!productInfo[product.name]) {
					productInfo[product.name] = {
						name: product.name,
						totalPrice: 0,
						quantity: 0
					};
				}
				productInfo[product.name].totalPrice += product.price;
				productInfo[product.name].quantity += 1;
			}

			let totalPrice = showCost(),
                allProducts = Object.keys(productInfo).map(groupName => productInfo[groupName]);

			return{
				totalPrice: totalPrice,
				products: allProducts // is []
				
			};
		}

		return {
			products: products,
			add: add,
			remove: remove,
			showCost: showCost,
			showProductTypes: showProductTypes,
			getInfo: getInfo
		};
	  }
	
	
	return {
		getProduct: getProduct,
		getShoppingCart: getShoppingCart
	};
}



module.exports = solve();
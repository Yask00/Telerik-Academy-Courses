function solve() {
	// Your classes
	//id generator
	const getNextId = (function () {
		let counter = 0;

		return function () {
			counter += 1;
			return counter;
		};
	})();

	const VALIDATOR = {
		isValidManufacturer_1_20: function (manufacturer) {
			if (typeof manufacturer !== 'string' || manufacturer.length < 1 || manufacturer.length > 20) {
				throw Error('Not valid manufacturer');
			}
		},
		isValidModel_1_20: function (model) {
			if (typeof model !== 'string' || model.length < 1 || model.length > 20) {
				throw Error('Not valid manufacturer');
			}
		},
		isValidPrice: function (price) {
			if (typeof price !== 'number' || price < 1) {
				throw Error('Not valid price');
			}
		},
		isValidScreenSize: function (screenSize) {
			if (typeof screenSize !== 'number' || screenSize < 1) {
				throw Error('Not valid price');
			}
		},
		isValidOperatingSystem: function (operatingSystem) {
			if (typeof operatingSystem !== 'string' || operatingSystem.length < 1 || operatingSystem.length > 10) {
				throw Error('Not valid operating system');
			}
		},
		isValidoOutputVoltage: function (outputVoltage) {
			if (typeof outputVoltage !== 'number' || outputVoltage < 5 || outputVoltage > 20) {
				throw Error('Not valid voltage');
			}
		},
		isValidOutputCurrent: function (outputCurrent) {
			if (typeof outputCurrent !== 'number' || outputCurrent < 100 || outputCurrent > 3000) {
				throw Error('Not valid voltage');
			}
		},
		isValidWifiRange: function (wifiRange) {
			if (typeof wifiRange !== 'number' || wifiRange < 1) {
				throw Error('Not valid wifi');
			}
		},
		isValidLanPorts: function (lanPorts) {
			if (typeof lanPorts !== 'number' || (lanPorts % 1) !== 0 || lanPorts < 1) {
				throw Error('Not valid wifi');
			}
		},
		isValidQuality: (function () {
			const validQualitys = ['high', 'mid', 'low'];

			return function (x) {
				if (validQualitys.indexOf(x) < 0) {
					throw Error('Alignment must be high mid or low');
				}
			};
		})(),
		isValidStoreName_1_20: function (name) {
			if (typeof name !== 'string' || name.length < 1 || name.length > 20) {
				throw Error('Not valid manufacturer');
			}
		},
		isValidQuantity: function (quantity) {
			if (typeof quantity !== 'number' || quantity < 1 || (quantity % 1) !== 0) {
				throw Error('Not valid quantity');
			}
		}
	};

	class Product { //id, manufacturer, model, price
		constructor(manufacturer, model, price) {
			this.manufacturer = manufacturer;
			this.model = model;
			this.price = price;
			this._id = getNextId();
		}

		get id() {
			return this._id;
		}

		get manufacturer() {
			return this._manufacturer;
		}

		set manufacturer(manufacturer) {
			VALIDATOR.isValidManufacturer_1_20(manufacturer);
			this._manufacturer = manufacturer;
		}

		get model() {
			return this._model;
		}

		set model(model) {
			VALIDATOR.isValidModel_1_20(model);
			this._model = model;
		}

		get price() {
			return this._price;
		}

		set price(price) {
			VALIDATOR.isValidPrice(price);
			this._price = price;
		}

		getLabel() {
			return (' - ' + this._manufacturer + ' ' + this._model + ' - **' + this._price + '**');
		}
	}

	class SmartPhone extends Product { //manufacturer, model, price,		screenSize,  operatingSystem 
		//TODO id??
		constructor(manufacturer, model, price, screenSize, operatingSystem) {
			super(manufacturer, model, price);
			this.screenSize = screenSize;
			this.operatingSystem = operatingSystem;
		}

		get screenSize() {
			return this._screenSize;
		}

		set screenSize(screenSize) {
			VALIDATOR.isValidScreenSize(screenSize);
			this._screenSize = screenSize;
		}

		get operatingSystem() {
			return this._operatingSystem;
		}

		set operatingSystem(operatingSystem) {
			VALIDATOR.isValidOperatingSystem(operatingSystem);
			this._operatingSystem = operatingSystem;
		}

		getLabel() {
			//SmartPhone - MANUFACTURER MODEL - **PRICE**
			let instance = 'SmartPhone';
			let superLabel = super.getLabel();
			return (instance + superLabel);
		}

	}

	class Charger extends Product {//manufacturer, model, price, 		outputVoltage, outputCurrent 
		constructor(manufacturer, model, price, outputVoltage, outputCurrent) {
			super(manufacturer, model, price);
			this.outputVoltage = outputVoltage;
			this.outputCurrent = outputCurrent;
		}

		get outputVoltage() {
			return this._outputVoltage;
		}

		set outputVoltage(outputVoltage) {
			VALIDATOR.isValidoOutputVoltage(outputVoltage);
			this._outputVoltage = outputVoltage;
		}

		get outputCurrent() {
			return this._outputCurrent;
		}

		set outputCurrent(outputCurrent) {
			VALIDATOR.isValidOutputCurrent(outputCurrent);
			this._outputCurrent = outputCurrent;
		}

		getLabel() {
			//	Charger - MANUFACTURER MODEL - **PRICE**
			let instance = 'Charger';
			let superLabel = super.getLabel();
			return (instance + superLabel);
		}
	}

	class Router extends Product { //manufacturer, model, price		wifiRange, lanPorts 
		constructor(manufacturer, model, price, wifiRange, lanPorts) {
			super(manufacturer, model, price);
			this.wifiRange = wifiRange;
			this.lanPorts = lanPorts;
		}

		get wifiRange() {
			return this._wifiRange;
		}

		set wifiRange(wifiRange) {
			VALIDATOR.isValidWifiRange(wifiRange);
			this._wifiRange = wifiRange;
		}

		get lanPorts() {
			return this._lanPorts;
		}

		set lanPorts(lanPorts) {
			VALIDATOR.isValidLanPorts(lanPorts);
			this._lanPorts = lanPorts;
		}

		getLabel() {
			//Router - MANUFACTURER MODEL - **PRICE**
			let instance = 'Router';
			let superLabel = super.getLabel();
			return (instance + superLabel);
		}
	}

	class Headphones extends Product {//manufacturer, model, price		 quality, hasMicrophone - boolean
		constructor(manufacturer, model, price, quality, hasMicrophone) {
			super(manufacturer, model, price);
			this.quality = quality;
			//TODO what is 
			this._hasMicrophone = Boolean(hasMicrophone);
		}

		get quality() {
			return this._quality;
		}

		set quality(quality) {
			VALIDATOR.isValidQuality(quality);
			this._quality = quality;
		}

		get hasMicrophone() {
			return this._hasMicrophone;
		}

		getLabel() {
			//Headphones - MANUFACTURER MODEL - **PRICE**
			let instance = 'Headphones';
			let superLabel = super.getLabel();
			return (instance + superLabel);
		}
	}

	class HardwareStore { //name
		constructor(name) {
			this.name = name;
			this._products = [];
			this._sold = 0;
			this._grouped = {};
		}

		get products() {
			return this._products.slice();
		}

		get name() {
			return this._name;
		}

		set name(name) {
			VALIDATOR.isValidStoreName_1_20(name);
			this._name = name;
		}

		stock(product, quantity) {

			if (!(product instanceof Product)) {
				throw Error('not an instance');
			}

			VALIDATOR.isValidQuantity(quantity);

			if (!this._grouped[product.id]) {
				this._products.push(product);
				this._grouped[product.id] = {product, quantity};
			}
			else{
				this._grouped[product.id].quantity += quantity;
			}

			return this;
		}

		sell(productId, quantity) {
			VALIDATOR.isValidQuantity(quantity);
			
			const group = this._grouped[productId];

			if(!group) {
				throw 'Not available';
			}
			if(group.quantity < quantity) {
				throw 'Not enough';
			}

			group.quantity -= quantity;
			this._sold += group.product.price * quantity;
			
			if(group.quantity === 0) {
				this._grouped[productId] = false;
				const index = this._products.findIndex(x => x.id === productId);
				this._products.splice(index, 1);
			}


			return this;
		}

		getSold() {
			//returns the amount of money earned from selling in the current store
			return this._sold;

		}

		search(options) {
			let result;

			if(typeof options !== 'object') { // well, it must be a string then
				const pattern = options.toLowerCase();
				result = this._products.filter(p => p.manufacturer.toLowerCase().indexOf(pattern) >= 0 || p.model.toLowerCase().indexOf(pattern) >= 0);
			}

			else {
				result = this._products;

				if(options.hasOwnProperty('manufacturerPattern')) {
					const pattern = options.manufacturerPattern;
					result = result.filter(p => p.manufacturer.indexOf(pattern) >= 0);
				}
				if(options.hasOwnProperty('modelPattern')) {
					const pattern = options.modelPattern;
					result = result.filter(p => p.model.indexOf(pattern) >= 0);
				}

				if(options.hasOwnProperty('minPrice')) {
					result = result.filter(p => p.price >= options.minPrice);
				}
				if(options.hasOwnProperty('maxPrice')) {
					result = result.filter(p => p.price <= options.maxPrice);
				}

				if(options.hasOwnProperty('type')) {
					let base = false;
					switch(options.type) {
						case 'SmartPhone': base = SmartPhone; break;
						case 'Charger': base = Charger; break;
						case 'Router': base = Router; break;
						case 'Headphones': base = Headphones; break;
					}
					result = result.filter(p => p instanceof base);
				}
			}

			return result.map(x => this._grouped[x.id]);
		}
	}

	return {
		getSmartPhone(manufacturer, model, price, screenSize, operatingSystem) {
			return new SmartPhone(manufacturer, model, price, screenSize, operatingSystem);
			// returns SmarhPhone instance
		},
		getCharger(manufacturer, model, price, outputVoltage, outputCurrent) {
			return new Charger(manufacturer, model, price, outputVoltage, outputCurrent);
			// returns Charger instance
		},
		getRouter(manufacturer, model, price, wifiRange, lanPorts) {
			return new Router(manufacturer, model, price, wifiRange, lanPorts);
			// returns Router instance
		},
		getHeadphones(manufacturer, model, price, quality, hasMicrophone) {
			return new Headphones(manufacturer, model, price, quality, hasMicrophone);
			// returns Headphones instance
		},
		getHardwareStore(name) {
			return new HardwareStore(name);
			// returns HardwareStore instance
		}
	};
}





module.exports = solve;
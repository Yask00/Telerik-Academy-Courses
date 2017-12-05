function solve() {
	// Your classes

	const VALIDATOR = {
		isValidName: function (name) {
			if (typeof name !== 'string' || !name.match(/^([a-zA-Z0-9]|\s){1,24}$/)) {
				throw Error(`Ivalid name`);
			}
		},
		isValidDescription: function (description) {
			if (typeof description !== 'string') {
				throw Error(`Description must be string`);
			}
		},
		isValidVersion: function (version) {
			if (typeof version !== 'number' || version <= 0) { //Number.isNaN(version) ????
				throw Error(`Invalid version`); 			   // <= 0 works, < 1 not working ??
			}
		},
		isValidRating: function (rating) {
			if (typeof rating !== 'number' || rating < 1 || rating > 10) { //Number.isNaN(version) ????
				throw Error(`Ivalid rating`);
			}
		},
		isValidHostname: function (name) {
			if (typeof name !== 'string' || name.length < 1 || name.length > 32) {
				throw Error(`Invalid hostname`);
			}
		}
	};

	function copyApp(app) {
		return {
			name: app.name,
			description: app.description,
			version: app.version,
			rating: app.rating,
			apps: app.apps // this is for stores
		};
	}

	class App { //name, description, version and rating
		constructor(name, description, version, rating) {
			//put validations here instead of settters, get the points?????
			//VALIDATOR.isValidName(name);
			//VALIDATOR.isValidDescription(description);
			//VALIDATOR.isValidVersion(version);
			//VALIDATOR.isValidRating(rating);

			this.name = name;  //ALTERNATIVE 	this._name with validations here and without setter()
			this.description = description;
			this.version = version;
			this.rating = rating;
		}

		get name() {
			return this._name;
		}

		set name(name){
			VALIDATOR.isValidName(name);
			this._name = name;
		}

		get description() {
			return this._description;
		}

		set description(description){
			VALIDATOR.isValidDescription(description);
			this._description = description;
		}
		
		get version() {
			return this._version;
		}

		set version(version){
			VALIDATOR.isValidVersion(version);
			this._version = version;
		}

		get rating() {
			return this._rating;
		}

		set rating(rating){
			VALIDATOR.isValidRating(rating);
			this._rating = rating;
		}

		release(param) {

			if (typeof param !== 'object') {
				param = { version: param };
			}

			VALIDATOR.isValidVersion(param.version);

			if (param.version <= this._version) { //was < and not working
				throw Error(`new version should be correct`);
			}
			this._version = param.version;


			if (param.hasOwnProperty('description')) {
				VALIDATOR.isValidDescription(param.description);
				this._description = param.description;
			}


			if (param.hasOwnProperty('rating')) {
				VALIDATOR.isValidRating(param.rating);
				this._rating = param.rating;
			}

			return this; //was not working without
		}

	}


	class Store extends App {  //name, description, version and rating
		constructor(name, description, version, rating) {
			super(name, description, version, rating);
			this._apps = []; //array of apps
		}

		get apps() {
			return this._apps;
		}

		//set apps(newArr){
		//	if(!Array.isArray(newArr)){
		//		throw new Error('Value must be an Array!');
		//	}
		//	this._apps = newArr;
		//}

		uploadApp(app) {  //name, description, version and rating

			if (!(app instanceof App)) {
				throw Error(`Not an instance of App`);
			}

			const index = this._apps.findIndex(x => x.name === app.name);
			if(index >= 0) {
				this._apps.splice(index, 1); //remove one at index
			}
			//no check for smaller version????
			this._apps.push(copyApp(app)); //adds the new one not implicitly???

			return this;
		}

		takedownApp(name) {
			if (typeof (name) === 'undefined' || name === '') {
				throw Error(`Invalid`);
			}

			let index = this._apps.findIndex(pr => pr.name === name);// working with this.apps also

			if (index < 0) {
				throw Error(`no such item in apps []`);
			}

			this.apps.splice(index, 1);
			return this;
		}

		search(pattern) { //just set both to lower case
			if (typeof pattern !== 'string' || pattern === '') {
				throw Error('Search pattern should be non-empty a string');
			}

			pattern = pattern.toLowerCase();

			let returnedApps = this._apps.filter(function (item) { //works   with this.apps also
				return item.name.toLowerCase().indexOf(pattern) >= 0;
			});

			return returnedApps.sort();
		}

		listMostRecentApps(count) {

			let defaultCount = count || 10;

			let returnedArr = this.apps.splice(this.apps.length - defaultCount, defaultCount);

			return returnedArr.reverse();
		}

		listMostPopularApps(count) {
			let defaultCount = +(count) || 10;

			return this._apps.map((app, index) => ({app, index}))
				.sort((x, y) => {
					if(y.app.rating !== x.app.rating) {
						return y.app.rating - x.app.rating;
					}
					return y.app.index - x.app.index;
				})
				.slice(0, count)
				.map(x => x.app);
		}
	}

	class Device {
		constructor(hostname, apps) { 	//takes hostname and an array of pre-installed apps (e.g. default store)
			VALIDATOR.isValidHostname(hostname);

			if (!Array.isArray(apps)) {
				throw Error('apps must be an array of apps');
			}

			if (!apps.every(x => x instanceof App)) {
				throw Error('There is non-app in the apps array');
			}

			this._hostname = hostname;
			this._apps = apps.map(x => copyApp(x));
			this._stores = apps.filter(x => x instanceof Store).map(x => copyApp(x));
		}

		get hostname() {
			return this._hostname;
		}

		get apps() {
			return this._apps.slice(); //why slice() 	??
		}

		search(pattern) {
			pattern = pattern.toLowerCase();

			const result = {};
			this._stores.forEach(store => {
				store.apps.forEach(x => {
					if(x.name.toLowerCase().indexOf(pattern) < 0) {
						return;
					}
					if(result.hasOwnProperty(x.name) && x.version <= result[x.name].version) {
						return;
					}
					result[x.name] = x;
				});
			});

			// bgcoder does not support Object.values @ the moment (Thu Feb 23 15:35:42 EET 2017)
			return Object.keys(result).sort().map(key => result[key]);
		}

		install(name) {
			let bestApp = {version: -1};
			this._stores.forEach(store => {
				const currApp = store.apps.find(x => x.name === name);
				if(currApp && bestApp.version < currApp.version) {
					bestApp = currApp;
				}
			});

			if(bestApp.version < 0) {
				throw Error('Error app not found');
			}

			if(this._apps.every(x => x.name !== name)) {
				this._apps.push(copyApp(bestApp));
				if(bestApp instanceof Store) {
					this._stores.push(copyApp(bestApp));
				}
			}

			return this;
		}

		uninstall(name) {
			let index = this._apps.findIndex(x => x.name === name);
			if(index < 0) {
				throw Error('App is not installed');
			}
			this._apps.splice(index, 1);

			index = this._stores.findIndex(x => x.name === name);
			if(index >= 0) {
				this._stores.splice(index, 1);
			}

			return this;
		}

		listInstalled() {
			return (this._apps.slice()
				.sort((x, y) => x.name.localeCompare(y.name)));
		}

		update() {
			this._apps = this._apps.map(app => {
				const name = app.name;

				let bestApp = app;
				this._stores.forEach(store => {
					const currApp = store.apps.find(x => x.name === name);
					if(currApp && bestApp.version < currApp.version) {
						bestApp = currApp;
					}
				});

				return bestApp;
			});

			return this;
		}
	}



	return {
		createApp(name, description, version, rating) {
			return new App(name, description, version, rating);
			// returns a new App object
		},
		createStore(name, description, version, rating) {
			return new Store(name, description, version, rating);
			// returns a new Store object
		},
		createDevice(hostname, apps) {
			return new Device(hostname, apps);
			// returns a new Device object
		}

	};

}






// Submit the code above this line in bgcoder.com
module.exports = solve;

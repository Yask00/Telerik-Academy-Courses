function solve() {
	//Properties name, title and author are a strings between 3 and 25 characters
	const isValidTitle = function (name) {
		if (typeof name !== 'string' || name.length < 3 || name.length > 25) {
			throw Error(`invalid Title`);
		}
	};

	const idGenerator = (function () {
		let id = 0;

		return function () {
			id += 1;
			return id;
		};

	})();

	class Player {
		constructor(name) {
			this.name = name;
			this.playlists = [];
			this.id = idGenerator();
		}

		get name() {
			return this._name;
		}

		set name(name) {
			isValidTitle(name);
			this._name = name;
		}

		addPlaylist(playlistToAdd) {
			if (!(playlistToAdd instanceof PlayList)) {
				throw Error(`Not an instance of PlayList`);
			}

			this.playlists.push(playlistToAdd);
			return this;
		}

		getPlaylistById(id) {
			this.playlists.forEach(item => {
				if (item.id === id) {
					return item;
				}
				return null;
			});
		}

		removePlaylist(option) {
			var id = option;
			if (typeof (option) === 'undefined') {
				throw Error(`Invalid`);
			}

			if (typeof (option) !== 'number') {
				id = option.id;
			}

			var index = this.playlists.findIndex(function (playlist) {
				return playlist.id === id;
			});

			if (index < 0) {
				throw Error(`Invalid`);
			}
			this.playlists.splice(index, 1);
			return this;
		}

		listPlaylists(page, size) {
			if (typeof (page) === 'undefined' ||
				typeof (size) === 'undefined' ||
				page < 0 ||
				size <= 0 ||
				page * size > this.playlists.length) {
				throw {
					name: 'InvalidPageSizeError',
					message: 'InvalidPageSizeError',
				};
			}
			this.playlists.sort(byNameThenById);
			return this.playlists.slice(page * size, (page + 1) * size);
		}

		contains(playable, playlist) {
			//
		}

		search(pattern) {
			//
		}

	}

	class PlayList { //id, name
		constructor(name) {
			this._id = idGenerator(); // with _idand no getter two tests not passed
			this.name = name;
			this.playables = [];
			return this; //without this was not catchng 2 tests ??????
		}

		get id() {
            return this._id;
        }

		get name() {
			return this._name;
		}

		set name(name) {
			isValidTitle(name);
			this._name = name;
		}

		addPlayable(playable) {
			//let curPlayable = {};
			//curPlayable.name = playable;
			//curPlayable.id = idGenerator();

			this.playables.push(playable); // [ {name: 'name', id: 1}, {name: 'name', id: 2} ]
			return this;
		}

		getPlayableById(id) { //can return multiple same instances
			//this.playables.forEach(pl => {
			//	if (pl.id === id) {
			//		return pl;
			//	}
			//});
			//return null;
			var i, len;

			for (i = 0, len = this.playables.length; i < len; i += 1) {
				if (this.playables[i].id === id) {
					return this.playables[i];
				}
			}

			return null;
		}

		removePlayable(option) {
			let id = option;
			if (typeof option === 'undefined') {
				throw new Error(`no option for remove`);
			}

			if (typeof (option) !== 'number') {
				id = option.id;
			}

			let index = this.playables.findIndex(it => it.id === id);

			if (index < 0) {
				throw new Error(`No such playable`);
			}

			this.playables.splice(index, 1);
			return this;
		}

		listPlayables(page, size) {
			if (typeof (page) === 'undefined' ||
				typeof (size) === 'undefined' ||
				page < 0 ||
				size <= 0 ||
				page * size > this.playables.length) {
				throw new Error(`invalid`);
			}

			this.playables.sort(function (pl1, pl2) {
				if (pl1.title === pl2.title) {
					return pl1.id - pl2.id;
				}
				return pl1.title.localeCompare(pl2.title);
			});
			return this.playables.slice(page * size, (page + 1) * size);
		}

	}

	class Playable { //id, title, author
		constructor(title, author) {
			this.id = idGenerator();
			this.title = title;
			this.author = author;
		}

		get title() {
			return this._title;
		}

		set title(title) {
			isValidTitle(title);
			this._title = title;
		}

		get author() {
			return this._author;
		}

		set author(author) {
			isValidTitle(author);
			this._author = author;
		}

		play() {
			return `[${this.id}]. [${this.title}] - [${this.author}]`;
			//returns a string in the format: [id]. [title] - [author]
		}
	}

	class Audio extends Playable { //id, title, author + length
		constructor(title, author, length) {
			super(title, author);
			this.id = idGenerator();
			this.length = length;
		}

		get length() {
            return this._length;
        }
        set length(x) {
            if (typeof x !== 'number' || x < 1) {
                throw Error('Length must be a number');
            }
            this._length = x;
        }

		play() {
			let superPlay = super.play();
			return `${super.play()} - [${this.length}]`;
			//return super.play.call(this, ' - ${this.length}');
		}

	}

	class Video extends Playable { //id, title, author + imdbRating
		constructor(title, author, imdbRating) {
			super(title, author);
			this.id = idGenerator();

			if (imdbRating < 1 || imdbRating > 5) {
				throw Error(`Length must be between 1 an 5`);
			}

			this.imdbRating = imdbRating;
		}

		play() {
			let superPlay = super.play();
			return `${superPlay} - [${this.imdbRating}]`;
			//return super.play.call(this, ' - ${this.length}');
		}
	}

	const module = {
		getPlayer: function (name) {
			return new Player(name);
		},
		getPlaylist: function (name) {
			return new PlayList(name);
			//returns a new playlist instance with the provided name
		},
		getAudio: function (title, author, length) {
			return new Audio(title, author, length);
			//returns a new audio instance with the provided title, author and length
		},
		getVideo: function (title, author, imdbRating) {
			return new Video(title, author, imdbRating);
			//returns a new video instance with the provided title, author and imdbRating
		}
	};

	return module;
}



module.exports = solve;
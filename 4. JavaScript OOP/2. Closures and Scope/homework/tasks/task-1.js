function solve() {
	
    var library = (function () {
		var books = [];
		var categories = [];

		function listBooks(param) {
           
            if (!param) {
                return books;
            }
            
            if (param.category) { //return for only this category
                return books.filter(x => x.category === param.category);
            }

            if (param.author) { //return for only this author
                return books.filter(x => x.author === param.author);
            }
            //demo in filter()
            
            return books;
        }

		function addBook(book) { //title, author, ISBN
			
            let titleLength = book.title.length;

            if (titleLength < 2 || titleLength > 100) {
                throw new Erro ('Book title must be 2 to 100 symbols long');
            }
            
            if (book.author === '') {
                throw new Erro ('Author should not be empty string');
            }

            if (!book.isbn.match(/^[0-9]{10}$/) && !book.isbn.match(/^[0-9]{13}$/)) { // DIGITS!!!
                throw new Erro ('ISBN is 10 or 13 digits long');
            }

            books.forEach(t => {
                if  (t.title === book.title || t.isbn === book.isbn) {
                throw new Error ('Title and ISBN must be unique');
                }
            });
               
            if (categories.indexOf(book.category) < 0) {
                categories.push(book.category);
            }

            book.ID = books.length + 1;
			books.push(book);
			return book;

            //77 of 100 with only this validations
		}

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());

	return library;
}


module.exports = solve;
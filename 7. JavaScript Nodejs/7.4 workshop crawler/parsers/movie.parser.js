const { Movie } = require('../models/movie.model');

const parseMovie = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) { // is it not 2xx
                throw new Error('Invalid url');
            }

            return response.text();  
        })
        .then((html) => {

            const movie = Movie.fromHtml(html);
            //movies.push(movie);
            return movie;

            //const titleAndYear = $(DETAILS.TITLE_SELECTOR).html();
            //const title = titleAndYear.substring(0, titleAndYear.indexOf('&nbsp;<span '));
            //const posterImgUrl = $(DETAILS.POSTER_IMG_URL).attr('src');
            //console.log(posterImgUrl);

        });
};

module.exports = { parseMovie };
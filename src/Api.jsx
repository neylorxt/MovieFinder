import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL_FILMS = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
const API_BEAR = import.meta.env.VITE_TMDB_API_KEY;

export const getMovies = async () => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/discover/movie',
            {
                params: {
                    include_adult: false,
                    include_video: false,
                    language: 'en-US',
                    page: 1,
                    sort_by: 'popularity.desc'
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_BEAR}`
                }
            }
        );
        return response.data

    } catch (error) {
        console.error('Erreur axios :', error);
    }
};

export const getMovieByName = async (movieName) => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    query: movieName,
                    include_adult: false,
                    include_video: false,
                    language: 'en-US',
                    page: 1,
                    sort_by: 'popularity.desc'
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_BEAR}`
                }
            }
        );

        return response.data

    } catch (error) {
        console.error('Erreur axios :', error);
    }
}
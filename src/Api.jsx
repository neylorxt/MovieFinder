import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL_FILMS = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
const API_BEAR = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI5NjE3N2E3YTk0ZTY2ZmYwZWNjN2EwNWE1YTkwZSIsIm5iZiI6MTc1MDI3MTAxNS42NzEsInN1YiI6IjY4NTMwNDI3ZDExMjA0ZTA1ZDYwYjM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZTlhJb-XRzCAdDJyoOztXNHUlvVWxB8uw_6OZKIPwQ";

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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI5NjE3N2E3YTk0ZTY2ZmYwZWNjN2EwNWE1YTkwZSIsIm5iZiI6MTc1MDI3MTAxNS42NzEsInN1YiI6IjY4NTMwNDI3ZDExMjA0ZTA1ZDYwYjM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZTlhJb-XRzCAdDJyoOztXNHUlvVWxB8uw_6OZKIPwQ'
                }
            }
        );

        return response.data

    } catch (error) {
        console.error('Erreur axios :', error);
    }
}
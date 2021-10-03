import axios from "axios";


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '77e632ed36e50316f3d6926b34f9c788'

export  async function trendingMovies (){
    const response = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    const filmsData = await axios.get(response)
    return filmsData
}


export async function fetchMovieId (movieId){
    const response = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    const  movieIdResponse = await axios.get(response);
    return movieIdResponse
}

export async function fetchCastMovieId (castMovieId){
    const castUrl = `${BASE_URL}/movie/${castMovieId}/credits?api_key=${API_KEY}&language=en-US`;
    const creditsResponse = await axios.get(castUrl);
    return creditsResponse;
}

export async function fetchReviews(reviewsMovieId){
    const reviewsUrl = `${BASE_URL}/movie/${reviewsMovieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const reviewsResponse = await axios.get(reviewsUrl);
    return reviewsResponse;
}

export async function fetchSearchMovie(query){
    const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const searchResponse = await axios.get(searchUrl);
    return searchResponse;
}
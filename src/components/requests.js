const API_KEY = "5b20c33200d5fa3c0e361d3a268d628f"

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
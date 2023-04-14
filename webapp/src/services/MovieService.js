import axios from 'axios'

const MOVIE_API_BASE_URL = "http://localhost:8080/movie/list";

class MovieService {

    getMovies(){
        return axios.get(MOVIE_API_BASE_URL);
    }

    createMovie(movie){
        return axios.post("http://localhost:8080/movie/",movie)
    }

    deleteMovie(id){
        return axios.delete("http://localhost:8080/movie"+"/"+id)
    }

    getMovieById(id){
        return axios.get("http://localhost:8080/movie"+"/"+id)
    }

    updateMovieById(id, movie){
        return axios.put("http://localhost:8080/movie"+"/"+id, movie)
    }


}

export default new MovieService()
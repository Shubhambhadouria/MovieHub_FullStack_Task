package com.zkteco.moviehub.service;

import java.util.List;

import com.zkteco.moviehub.dto.MovieDTO;
import com.zkteco.moviehub.dto.Result;
import com.zkteco.moviehub.entity.Movie;

public interface MovieService {

	Result addMovie(MovieDTO movie);

	Result getMovieById(String id);

	Result getAllMovies();

	Result updateMovieById(MovieDTO movie, String id);

	Result deleteMovieById(String id);

	Result addBatch(List<Movie> movies);
	
	
}

package com.zkteco.moviehub.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zkteco.moviehub.dto.MovieDTO;
import com.zkteco.moviehub.dto.Result;
import com.zkteco.moviehub.entity.Movie;
import com.zkteco.moviehub.service.MovieService;

@CrossOrigin("*")
@RestController
@RequestMapping("/movie")
public class MovieController {

	@Autowired
	MovieService movieService;
	
	@Autowired
	private ModelMapper mapper;
	
	private final Logger logger = LoggerFactory.getLogger(MovieController.class);

	@PostMapping("/")
	public Result addMovieHandler(@RequestBody MovieDTO movie) {
		logger.info("Inside Add Movie Method");
		return movieService.addMovie(movie);
	}

	@GetMapping("/{id}")
	public Result getMovieByIdHandler(@PathVariable("id") String id) {
		logger.info("Inside Get Movie By Id Method");
		return movieService.getMovieById(id);
	}
	
	@GetMapping("/list")
	public Result getMoviesHandler() {
		logger.info("Inside Get All Movies Method");
		return movieService.getAllMovies();
	}
	
	@PutMapping("/{id}")
	public Result updateMovieByIdHandler(@RequestBody MovieDTO movie,@PathVariable("id") String id) {
		logger.info("Inside Update Movie Data Method");
		return movieService.updateMovieById(movie, id);
	}
	
	@DeleteMapping("/{id}")
	public Result deleteMovieByIdHandler(@PathVariable("id") String id) {
		logger.info("Inside Delete Movie By Id Method");
		return movieService.deleteMovieById(id);
	}
	
	@PostMapping("/batch")
	public Result addMovieBatchHandler(@RequestBody List<Movie> movies) {
		logger.info("Inside Add Batch Movie Method");
		return movieService.addBatch(movies);
	}
	
}

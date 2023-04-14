package com.zkteco.moviehub.serviceimpl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zkteco.moviehub.dto.MovieDTO;
import com.zkteco.moviehub.dto.Result;
import com.zkteco.moviehub.entity.Movie;
import com.zkteco.moviehub.repository.MovieRepository;
import com.zkteco.moviehub.service.MovieService;

import jakarta.validation.Valid;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository movieRepo;

	@Autowired
	private ModelMapper mapper;

	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	Date date = new Date();
	String error = "ERR";

	private Result isValidToSave(@Valid MovieDTO movie) {

		// Validation for title
		if ((isNullorBlank(movie.getTitle()))) {
			if ((isValidLength(movie.getTitle()))) {
				if ((movieRepo.findByTitle(movie.getTitle()))!=null) {
					return new Result(error, "Movie title should be unique", null);
				}
			} else {
				return new Result(error, "Movie title must not be greater than 200 Characters", null);
			}
		} else {
			return new Result(error, "Movie title can not be null", null);
		}

		// Validation for Release Date
		if (isNullorBlank(movie.getReleaseDate())) {
			if (!movie.getReleaseDate().matches("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$")) {
				return new Result(error, "Date Should be in Format yyyy-MM-DD", null);
			}
		} else {
			return new Result(error, "Date Should be Null", null);
		}

		// Validation for genre
		if (isNullorBlank(movie.getGenre())
				&& (!isValidLength(movie.getGenre()))) {
			return new Result(error, "Genre must not be greater than 200 Characters", null);

		}

		
		
		// Validation for runtime
		if (Objects.nonNull(movie.getRunTime())
				&& (!(Integer.parseInt(movie.getRunTime()) > 0 && Integer.parseInt(movie.getRunTime()) < 999))) {
			return new Result(error, "Runtime must not be 0 or greater than 999 Minutes", null);

		}

		// Validation for Rating
		if (isNullorBlank(movie.getRating())
				&& (!isValidLength(movie.getRating()))) {
			return new Result(error, "Rating must not be greater than 200 Characters", null);

		}

		// Validation for Synopsis
		if (isNullorBlank(movie.getSynopsis())
				&& (!isValidLength(movie.getSynopsis()))) {
			return new Result(error, "Synopsis must not be greater than 200 Characters", null);

		}

		// Validation for Director
		if (isNullorBlank(movie.getDirector())) {
			if (!(isValidLength(movie.getDirector()))) {
				return new Result(error, "Director must not be greater than 200 Characters", null);
			}
		} else {
			return new Result(error, "Director can not be null", null);
		}

		// Validation for MovieCast
		if (isNullorBlank(movie.getMovieCast())) {
			if (!(isValidLength(movie.getMovieCast()))) {
				return new Result(error, "MovieCast must not be greater than 200 Characters", null);
			}
		} else {
			return new Result(error, "MovieCast can not be null", null);
		}

		return null;
	}
	
	private Boolean isNullorBlank(String data) {
		if(Objects.nonNull(data) && !data.isBlank()) {
			return true;
		}else {
			return false;
		}
	}
	
	private Boolean isValidLength(String name) {
		if(name.length()<=200 && name.length()>0) {
			return true;
		}else {
			return false;
		}
	}
	

	// Update Validation Methods
	private Result isValidToUpdate(@Valid MovieDTO movie) {

		// Validation for title
		if (isNullorBlank(movie.getTitle())
				&& (!isValidLength(movie.getTitle()))) {
			return new Result(error, "Movie title must not be greater than 200 Characters", null);

		}

		// Validation for Release Date
		if (isNullorBlank(movie.getReleaseDate())
				&& (!movie.getReleaseDate().matches("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$"))) {
			return new Result(error, "Date Should be in Format yyyy-MM-DD", null);

		}

		// Validation for genre
		if (isNullorBlank(movie.getGenre())
				&& (!isValidLength(movie.getGenre()))) {
			return new Result(error, "Genre must not be greater than 200 Characters", null);

		}
		
		// Validation for Runtime
		if (Objects.nonNull(movie.getRunTime())
				&& (!(Integer.parseInt(movie.getRunTime()) > 0 && Integer.parseInt(movie.getRunTime()) < 999))) {
			return new Result(error, "Runtime must be between 0 to 999 minutes", null);

		}

		// Validation for Rating
		if (Objects.nonNull(movie.getRating())
				&& (!(Integer.parseInt(movie.getRating()) > 0 && Integer.parseInt(movie.getRating()) < 11))) {
			return new Result(error, "Rating must be 0 to 10", null);

		}
		
		// Validation for Synopsis
		if (isNullorBlank(movie.getSynopsis())
				&& (!(isValidLength(movie.getSynopsis())))) {
			return new Result(error, "Synopsis must not be greater than 200 Characters", null);

		}

		// Validation for Director
		if (isNullorBlank(movie.getDirector())
				&& (!(isValidLength(movie.getDirector())))) {
			return new Result(error, "Director must not be greater than 200 Characters", null);

		}
 
		// Validation for MovieCast
		if (isNullorBlank(movie.getMovieCast())
				&& (!(isValidLength(movie.getMovieCast())))) {
			return new Result(error, "MovieCast must not be greater than 36 Characters", null);

		}

		return null;
	}

	// Adding Movie Data Method
	@Override
	public Result addMovie(@Valid MovieDTO movie) {
		Result result = isValidToSave(movie);
		if (result == null) {
			movie.setCreatedAt(dateFormat.format(date));

			SimpleDateFormat oldDateFormat = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat newDateFormat = new SimpleDateFormat("yyyy-MM-dd");

			try {
				Date oldDate = oldDateFormat.parse(movie.getReleaseDate());
				String newDateString = newDateFormat.format(oldDate);
				movie.setReleaseDate(newDateString);
			} catch (Exception e) {
				e.printStackTrace();
			}
			Movie mov = this.mapper.map(movie, Movie.class);
			movieRepo.save(mov);
			
			return new Result("OK", "Movie data is Added successfully", movie);
		} else {
			return result;
		}
	}

	// Fetching Movie Data Method
	@Override
	public Result getMovieById(String id) {
		Optional<Movie> movie = movieRepo.findById(id);
		if (movie.isPresent()) {
			MovieDTO mov = this.mapper.map(movie, MovieDTO.class);
			return new Result("OK", "Movie data is Fetched Successfully with Id : " + id, mov);
		} else {
			return new Result(error, "Movie data not found with Id : " + id, null);
		}

	}

	// Fetching All Movies Data Method
	@Override
	public Result getAllMovies() {
		List<Movie> movies = movieRepo.findAll();

		if (movies.isEmpty()) {
			return new Result(error, "No Movie Found in the database", null);
		} else {
			List<MovieDTO> movDto = new ArrayList<>();
			for (Movie mov : movies) {
				movDto.add(convertToDto(mov));
			}
			return new Result("OK", "Total Movies Found are : " + movies.size(), movDto);
		}
	}

	// DTO Converter method
	private MovieDTO convertToDto(Movie movie) {
		return mapper.map(movie, MovieDTO.class);
	}

	// Updating Movie Data By Id Method
	@Override
	public Result updateMovieById(MovieDTO movie, String id) {
		Optional<Movie> opt = movieRepo.findById(id);
		if (opt.isPresent()) {
			Result result = isValidToUpdate(movie);
			if (result == null) {
				movie.setUpdatedAt(dateFormat.format(date));

				if (Objects.nonNull(movie.getTitle()) && !"".equals(movie.getTitle())) {
					opt.get().setTitle(movie.getTitle());
				}
				if (Objects.nonNull(movie.getReleaseDate())) {
					opt.get().setReleaseDate(movie.getReleaseDate());
				}
				if (Objects.nonNull(movie.getGenre()) && !"".equalsIgnoreCase(movie.getGenre())) {
					opt.get().setGenre(movie.getGenre());
				}
				if (Objects.nonNull(movie.getRunTime())) {
					opt.get().setRunTime(movie.getRunTime());
				}
				if (Objects.nonNull(movie.getRating()) && !"".equalsIgnoreCase(movie.getRating())) {
					opt.get().setRating(movie.getRating());
				}
				if (Objects.nonNull(movie.getSynopsis()) && !"".equalsIgnoreCase(movie.getSynopsis())) {
					opt.get().setSynopsis(movie.getSynopsis());
				}
				if (Objects.nonNull(movie.getDirector())) {
					opt.get().setDirector(movie.getDirector());
				}
				if (Objects.nonNull(movie.getMovieCast())) {
					opt.get().setMovieCast(movie.getMovieCast());
				}
				if (Objects.nonNull(movie.getPhoto())) {
					opt.get().setPhoto(movie.getPhoto());
				}
				if (Objects.nonNull(movie.getCreatedAt())) {
					opt.get().setCreatedAt(movie.getCreatedAt());
				}
				if (Objects.nonNull(movie.getUpdatedAt())) {
					opt.get().setUpdatedAt(movie.getUpdatedAt());
				}

				movieRepo.save(opt.get());
				MovieDTO mov = this.mapper.map(opt.get(), MovieDTO.class);
				return new Result("OK", "Movie data is Updated successfully", mov);
			} else {
				return result;
			}
		} else {
			return new Result(error, "Movie's data not found with Id : " + id, null);
		}
	}

	// Deleting Movie Data By Id Method
	@Override
	public Result deleteMovieById(String id) {
		Optional<Movie> opt = movieRepo.findById(id);
		if (opt.isPresent()) {
			MovieDTO mov = this.mapper.map(opt.get(), MovieDTO.class);
			movieRepo.delete(opt.get());
			return new Result("OK", "Movie data deleted Successfully with Id : " + id, mov);
		} else {
			return new Result(error, "Movie data is not found with Id : " + id, null);
		}
	}

	// Adding List of Movies Data Method
	@Override
	public Result addBatch(List<Movie> movies) {
		if (movies.isEmpty()) {
			return new Result(error, "Movies data not found", null);
		} else {
			movieRepo.saveAll(movies);
			List<MovieDTO> movDto = new ArrayList<>();
			for (Movie mov : movies) {
				movDto.add(convertToDto(mov));
			}
			return new Result("OK", "Movies data Added Successfully", movDto);
		}

	}

}

import React, { useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "./style";
import { useState } from "react";
import MovieService from "../services/MovieService";
import { useNavigate, useParams } from "react-router-dom";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [runTime, setRuntime] = useState("");
  const [rating, setRating] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [director, setDirector] = useState("");
  const [movieCast, setMoviecast] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    MovieService.getMovieById(id)
      .then((response) => {
        setTitle(response.data.data.title);
        setReleaseDate(response.data.data.releaseDate);
        setGenre(response.data.data.genre);
        setRuntime(response.data.data.runTime);
        setRating(response.data.data.rating);
        setSynopsis(response.data.data.synopsis);
        setDirector(response.data.data.director);
        setMoviecast(response.data.data.movieCast);
        setPhoto(response.data.data.photo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const titleHead = () => {
    if (id) {
      return <h3 className={classes.updateMovie}>Update Movie</h3>;
    } else {
      return <h3 className={classes.updateMovie}>Add Movie</h3>;
    }
  };

  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [message7, setMessage7] = useState("");

  const saveOrUpdateMovie = (e) => {
    e.preventDefault();

    const movie = {
      title,
      releaseDate,
      genre,
      runTime,
      rating,
      synopsis,
      director,
      movieCast,
      photo,
};
    // console.log(movie)

    if (id) {

      const errors = {};
      if (!movie.title || movie.title.trim() === "" || /[^a-zA-Z0-9: ]/.test(movie.title)) {
        errors.title = "Title should not be null and should not contain symbols";
      }
      if (!movie.releaseDate || !/^\d{4}-\d{2}-\d{2}$/.test(movie.releaseDate)) {
        errors.releaseDate = "Release date should be in the format yyyy-mm-dd";
      }
      if ( !/^[a-zA-Z ]*$/.test(movie.genre)) {
        errors.genre = "Genre should only contain alphabets and spaces";
      }
      if (isNaN(movie.rating) || (Number(movie.rating)<0 || Number(movie.rating)>11) ) {
        errors.rating = "Rating should be a number and Between 0 to 10";
      }
      if (isNaN(movie.runTime) || (movie.runTime < 0 || movie.runTime > 999)) {
        errors.runTime = "Run time should be a number between 0 and 999";
      }
      if (!movie.director || movie.director.trim() === "" || /[^a-zA-Z, ]/.test(movie.director)) {
        errors.director = "Director field should not be empty can contain comma(,)";
      }
      if (!movie.movieCast || movie.movieCast.trim() === "" || /[^a-zA-Z, ]/.test(movie.movieCast)) {
        errors.movieCast = "Movie cast field should not be empty can contain comma(,)";
      }
      if (Object.keys(errors).length > 0) {
        console.log(errors);
        if (errors.title) {
          setMessage1(errors.title);
        }
        if(errors.releaseDate){
          setMessage2(errors.releaseDate);
        }
        if(errors.genre){
          setMessage3(errors.genre);
        }
        if(errors.runTime){
          setMessage4(errors.runTime);
        }
        if(errors.rating){
          setMessage5(errors.rating);
        }
        if(errors.director){
          setMessage6(errors.director);
        }
        if(errors.movieCast){
          setMessage7(errors.movieCast);
        }
      } else {
        MovieService.updateMovieById(id, movie)
        .then((response) => {
          console.log(response.data.message);
          setMessage(response.data.message);
          console.log(response.data);
          if (response.data.code === "OK") {
            alert("Movie data Updated Successfully");
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // alert("Movie Added Successfully!")
      }




      // MovieService.updateMovieById(id, movie)
      //   .then((response) => {
      //     console.log(response.data.message);
      //     setMessage(response.data.message);
      //     console.log(response.data);
      //     if (response.data.code === "OK") {
      //       alert("Movie data Updated Successfully");
      //       navigate("/");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } else {

      const errors = {};
      if (!movie.title || movie.title.trim() === "" || /[^a-zA-Z0-9: ]/.test(movie.title)) {
        errors.title = "Title should not be null and should not contain symbols";
      }
      if (!movie.releaseDate || !/^\d{4}-\d{2}-\d{2}$/.test(movie.releaseDate)) {
        errors.releaseDate = "Release date should be in the format yyyy-mm-dd";
      }
      if ( !/^[a-zA-Z ]*$/.test(movie.genre)) {
        errors.genre = "Genre should only contain alphabets and spaces";
      }
      if (isNaN(movie.rating) || (Number(movie.rating)<0 || Number(movie.rating)>11) ) {
        errors.rating = "Rating should be a number and Between 0 to 10";
      }
      if (isNaN(movie.runTime) || (movie.runTime < 0 || movie.runTime > 999)) {
        errors.runTime = "Run time should be a number between 0 and 999";
      }
      if (!movie.director || movie.director.trim() === "" || /[^a-zA-Z, ]/.test(movie.director)) {
        errors.director = "Director field should not be empty can contain comma(,)";
      }
      if (!movie.movieCast || movie.movieCast.trim() === "" || /[^a-zA-Z, ]/.test(movie.movieCast)) {
        errors.movieCast = "Movie cast field should not be empty can contain comma(,)";
      }
      if (Object.keys(errors).length > 0) {
        console.log(errors);
        if (errors.title) {
          setMessage1(errors.title);
        }
        if(errors.releaseDate){
          setMessage2(errors.releaseDate);
        }
        if(errors.genre){
          setMessage3(errors.genre);
        }
        if(errors.runTime){
          setMessage4(errors.runTime);
        }
        if(errors.rating){
          setMessage5(errors.rating);
        }
        if(errors.director){
          setMessage6(errors.director);
        }
        if(errors.movieCast){
          setMessage7(errors.movieCast);
        }
      } else {
        MovieService.createMovie(movie)
        .then((response) => {
          console.log(response.data.code);
          setMessage(response.data.message);
          if (response.data.code === "OK") {
            alert("Movie data Saved Successfully");
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // alert("Movie Added Successfully!")
      }
    }
  };

  const uploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const withoutPrefix = base64.replace(/^data:image\/\w+;base64,/, "");
    console.log(withoutPrefix);
    setPhoto(withoutPrefix);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleInputChange = (e) =>{
    setGenre( e.target.value );
  }

  return (
    <>
      {titleHead()}
      <Box
        className={classes.boxinput}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "65ch" },
        }}
        noValidate
        autoComplete="off" >
        <Button className={classes.message}>{message}</Button>
        
        <TextField id="outlined-basic" label="Title" variant="outlined" placeholder="Enter Date of Release" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className={classes.message1}>{message1}</div> 
        <TextField id="outlined-basic" label="Release Date" variant="outlined" placeholder="Enter Date of Release" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        <div className={classes.message2}>{message2}</div> 
        <TextField id="outlined-basic" label="Genre" variant="outlined" placeholder="Enter Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <div className={classes.message3}>{message3}</div> 

        {/* <FormControl fullWidth required>
         <InputLabel>Genre</InputLabel>
          <Select
            fullWidth
            label="Genre"
            name="genre"
            value={genre}
            onChange={(e) => handleInputChange(e)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Adventure">Adventure</MenuItem>
            <MenuItem value="Comedy">Comdey</MenuItem>
            <MenuItem value="Sci-Fi">Science Fiction</MenuItem>
            <MenuItem value="Horror">Horror</MenuItem>
          </Select>
        </FormControl> */}
       
        <TextField id="outlined-basic" label="Run Time" variant="outlined" placeholder="Enter Run Time" value={runTime} onChange={(e) => setRuntime(e.target.value)} />
        <div className={classes.message4}>{message4}</div> 
        <TextField id="outlined-basic" label="Rating" variant="outlined" placeholder="Enter Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <div className={classes.message5}>{message5}</div> 
        <TextField id="outlined-basic" label="Synopsis" variant="outlined" placeholder="Enter Description of Movie" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} />
        
        <TextField id="outlined-basic" label="Director" variant="outlined" placeholder="Enter Director's Name" value={director} onChange={(e) => setDirector(e.target.value)} />
        <div className={classes.message6}>{message6}</div> 
        <TextField id="outlined-basic" label="Movie Cast" variant="outlined" placeholder="Enter Movie's Cast" value={movieCast} onChange={(e) => setMoviecast(e.target.value)} />
        <div className={classes.message7}>{message7}</div> 
        <Button className={classes.updatebtn} variant="contained" color="primary" component="label" value={photo} onChange={(e) => { uploadImage(e);}}>Upload<input hidden accept="image/*" multiple type="file" /></Button>
        <Button className={classes.submitbtn} variant="contained" color="primary" onClick={(e) => saveOrUpdateMovie(e)}>Submit</Button>
      </Box>
    </>
  );
}

export default AddMovie;

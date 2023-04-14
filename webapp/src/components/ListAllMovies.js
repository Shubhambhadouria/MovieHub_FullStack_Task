import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MovieService from "../services/MovieService";
import useStyles from "./style";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

function ListAllMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    MovieService.getMovies()
      .then((res) => {
        setMovies(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (id) => {
    MovieService.deleteMovie(id)
      .then((response) => {
        getMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.main}>
        <Link to="/addmovie">
          <Button
            className={classes.addbtn}
            variant="contained"
            color="primary"
          >
            Add Movie
          </Button>
        </Link>

        <div className={classes.searchbar}>
          <TextField
            placeholder="Search by Title or Genre"
            style={{
              marginTop: 50,
              marginBottom: 20,
              width: "20%",
              backgroundColor: "white",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></TextField>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {movies
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.genre
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((data) => (
                <Grid item key={data.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`data:image/jpeg;base64,${data.photo}`}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        className={classes.movtitle}
                        align="left"
                        variant="h5"
                      >
                        {data.title}
                      </Typography>
                      <Typography className={classes.movsynop} align="left">
                        {data.synopsis}
                      </Typography>
                      <Typography className={classes.movgen} align="left">
                        {data.genre}
                      </Typography>
                      <Typography className={classes.movrat} align="left">
                        IMDb {data.rating}
                      </Typography>
                      <Typography className={classes.movrel} align="left">
                        {data.releaseDate}
                      </Typography>
                      <Typography className={classes.movrun} align="left">
                        {data.runTime} min
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardaction}>
                      <Link to={`/update-movie/${data.id}`}>
                        <Button
                          variant="contained"
                          size="medium"
                          align="flex-end"
                          color="primary"
                        >
                          Edit
                        </Button>
                      </Link>

                      <Link to="/">
                        <Button
                          variant="contained"
                          size="medium"
                          color="secondary"
                          onClick={() => deleteMovie(data.id)}
                        >
                          Delete
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ListAllMovies;

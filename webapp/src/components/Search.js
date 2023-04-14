import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import Box from "@mui/material/Box";
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
import TextField from "@mui/material/TextField";

function Search() {
  const classes = useStyles();
  return (
    <Box
      className={classes.searchinput}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "65ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Movie Title"
        variant="outlined"
        placeholder="Enter Movie Title to Search"
      />
      <Button className={classes.submitbtn} variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}

export default Search;

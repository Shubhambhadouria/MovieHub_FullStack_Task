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
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import useStyles from "./style";
function Navbar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appbar} position="static" color="none">
       
        <Toolbar>
          <Link className={classes.homelink} to="/">
          <HomeIcon className={classes.homeicon} />
          <Typography className={classes.home} variant="h6">
            Home
          </Typography>
          </Link>
          <Link className={classes.about} to="/about">
            <Typography className={classes.aboutop}  variant="h6">
              About
            </Typography>
          </Link>
          <Typography className={classes.login} variant="h6">
            Login
          </Typography>
          <LoginIcon className={classes.loginicon} />
        </Toolbar>
      </AppBar>
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Something here to give footer a purpose
        </Typography>
      </footer> */}
    </>
  );
}

export default Navbar;

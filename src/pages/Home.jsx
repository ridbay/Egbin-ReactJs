import React from 'react';
import Button from '@material-ui/core/Button';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Image from '../img/egbin-arial.jpeg';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Image})`,
    padding: theme.spacing(20,0),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    // marginTop: theme.spacing(0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
welcome:{
  color:"white",
  fontWeight:"bold"
}
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
        <div className={classes.heroContent}>
          <Container component="main">
            <Typography component="h1" variant="h2" align="center" color="white" gutterBottom className={classes.welcome}>
              Welcome to Egbin <br/>
              Staff Leave Management System
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link color="inherit" href="/signin" underline='none'>
                      Sign In
                  </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link color="inherit" href="/signup" underline='none'>
                      Sign Up
                  </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      
<Footer/>
    </React.Fragment>
  );
}

export default Home;
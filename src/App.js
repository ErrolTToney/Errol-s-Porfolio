import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar'

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import AboutMe from './components/AboutMe/AboutMe'
import aliRoosterQuote from './images/aliRoosterQuote.jpg';
import PortfolioPic from './images/PortfolioPic.JPG';
import useStyles from './styles'


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
  

  return (
  <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
      <img className={classes.image_Two} src={PortfolioPic} alt="PortFolio" height='180'/>
     
      <Typography className={classes.header} variant="h5" align="center" >Errol's Portolio</Typography>
      <img className={classes.image} src={aliRoosterQuote} alt="aliRoosterQuote" height='180'/>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" align="left" spacing={3}>
          <AboutMe/>
        </Grid>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
            <Posts />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Form />
        </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;

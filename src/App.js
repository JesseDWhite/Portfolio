import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience'
import About from './Components/About';
import { Grid } from '@mui/material';
import { BACKGROUNDGIFS } from './Constants/BackGroundConstants';

function App() {
  const [background, setBackground] = useState();
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const randomBackground = BACKGROUNDGIFS[Math.floor(Math.random() * BACKGROUNDGIFS.length)];
    setBackground(randomBackground);
  }, [theme])

  const changeBackgroundImage = () => {
    (!theme) ?
      setTheme(true) :
      setTheme(false)
  }

  return (
    <>
      {/* <Router>
        <Switch> */}
      {/* <Grid
        container
      > */}
      {/* <Route path='/'> */}
      {/* <Grid
          sx={{
            // width: '100vw'
          }}
        > */}
      <Contact />
      <Intro
        background={background}
        theme={theme}
        changeBackgroundImage={changeBackgroundImage}
      />
      {/* </Grid> */}
      {/* </Route>
            <Route path='/projects'> */}
      {/* <Grid> */}
      <Projects />
      {/* </Grid> */}
      {/* </Route> */}
      {/* <Grid
          sx={{
            width: '100vw'
          }}> */}
      {/* <Route path='/experience'> */}
      <Experience />
      {/* </Route> */}
      {/* </Grid>
        <Grid
          sx={{
            height: '100vh'
          }}> */}
      {/* <Route path='/about'> */}
      <About />
      {/* </Route> */}
      {/* </Grid>
      </Grid> */}
      {/* </Switch>
      </Router> */}
    </>
  );
}

export default App;

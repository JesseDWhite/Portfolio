import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
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
      <Grid
        container
      >
        <Grid
          sx={{
            // height: '100vh',
            width: '100vw'
          }}
        >
          <Contact />
          <Intro
            background={background}
            theme={theme}
            changeBackgroundImage={changeBackgroundImage}
          />
        </Grid>
        <Grid
          sx={{
            // height: '100vh',
            width: '100vw'
          }}>
          <Projects />
        </Grid>
        <Grid
          sx={{
            height: '100vh'
          }}>
          <About />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

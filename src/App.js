import React, { useState, useEffect } from 'react';
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
      <Contact />
      <Grid
        sx={{
          minHeight: '100vh'
        }}
      >
        <Intro
          background={background}
          theme={theme}
          changeBackgroundImage={changeBackgroundImage}
        />
      </Grid>
      <Projects />
      <Experience />
      <About />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience'
import About from './Components/About';
import { Grid } from '@mui/material';
import { BACKGROUNDGIFS } from './Constants/BackGroundConstants';
import { Element } from 'react-scroll';
import Footer from './Components/Footer';

function App() {
  const [viewPort, setViewPort] = useState(window.innerWidth);
  const [background, setBackground] = useState();
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const randomBackground = BACKGROUNDGIFS[Math.floor(Math.random() * BACKGROUNDGIFS.length)];
    setBackground(randomBackground);
  }, [theme])

  useEffect(() => {
    setViewPort(viewPort)
  }, [viewPort])

  const changeBackgroundImage = () => {
    (!theme) ?
      setTheme(true) :
      setTheme(false)
  }

  return (
    <>
      <Contact
        viewPort={viewPort}
      />
      <Grid
        sx={{
          minHeight: '100vh'
        }}
      >
        <Element name='top' className='element'>
          <Intro
            background={background}
            theme={theme}
            changeBackgroundImage={changeBackgroundImage}
            viewPort={viewPort}
          />
        </Element>
      </Grid>
      <Projects
        viewPort={viewPort}
      />
      <Experience
        viewPort={viewPort}
      />
      <About
        viewPort={viewPort}
      />
      <Footer />
    </>
  );
}

export default App;

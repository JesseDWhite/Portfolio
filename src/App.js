import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Experience from './Components/Experience'
import About from './Components/About';
import { Grid } from '@mui/material';
import { BACKGROUNDGIFS } from './Constants/BackGroundConstants';
import { Element } from 'react-scroll';
import Footer from './Components/Footer';
import Header from './Components/Header';

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

  return (
    <>
      <Grid
        sx={{
          minHeight: '100vh'
        }}
      >
        <Element
          name='top'
          className='element'>
          <Intro
            background={background}
            setTheme={setTheme}
            theme={theme}
            viewPort={viewPort}
          />
        </Element>
      </Grid>
      <Element
        name='projects'
        className='element'
      >
        <Projects
          viewPort={viewPort}
        />
      </Element>
      <Element
        name='experience'
        className='element'>
        <Experience
          viewPort={viewPort}
        />
      </Element>
      <Element
        name='about'
        className='element'>
        <About
          viewPort={viewPort}
        />
      </Element>
      <Footer />
      <Header
        viewPort={viewPort}
      />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Experience from './Components/Experience'
import About from './Components/About';
import { Grid } from '@mui/material';
import { BACKGROUNDGIFS } from './Constants/BackGroundConstants';
import { Element } from 'react-scroll';
import Header from './Components/Header';
import { AnimateKeyframes } from 'react-simple-animate';

function App() {
  const [background, setBackground] = useState();
  const [theme, setTheme] = useState(false);
  const [viewPort, setViewPort] = useState(window.innerWidth);

  useEffect(() => {
    const randomBackground = BACKGROUNDGIFS[Math.floor(Math.random() * BACKGROUNDGIFS.length)];
    setBackground(randomBackground)
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setViewPort(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <AnimateKeyframes
            play
            iterationCount={1}
            duration={1}
            keyframes={[
              "opacity: 0",
              "opacity: 1",
            ]}
          >
            <Intro
              background={background}
              setTheme={setTheme}
              theme={theme}
              viewPort={viewPort}
            />
          </AnimateKeyframes>

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
      <AnimateKeyframes
        play
        iterationCount={1}
        duration={1}
        keyframes={[
          "opacity: 0",
          "opacity: 1",
        ]}
      >
        <Header
          viewPort={viewPort}
        />
      </AnimateKeyframes>
    </>
  );
}

export default App;

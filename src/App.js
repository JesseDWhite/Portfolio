import React from 'react';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import { Grid } from '@mui/material';

function App() {
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
          <Intro />
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

import logo from './logo.svg';
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
        <Contact />
        <Grid
          sx={{
            height: '100vh'
          }}
        >
          <Intro />
        </Grid>
        <Grid
          sx={{
            height: '100vh'
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

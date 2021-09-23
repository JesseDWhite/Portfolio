import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import { Grid, Paper } from '@mui/material';

function App() {
  return (
    <>
      <Grid
        container
        display='flex'
      >
        <Contact />
        <Grid>
          <Intro />
        </Grid>
        <Grid>
          <Projects />
        </Grid>
        <Grid>
          <About />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

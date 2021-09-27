import React, { useState } from 'react';
import './App.css';
import Intro from './Components/Intro'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import { Grid, Step, StepLabel, StepContent, Stepper, Box } from '@mui/material';
import Button from '@mui/material/Button';

function App() {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: 'Hey There!',
      content: <Intro />
    },
    {
      label: 'Projects',
      content: <Projects />
    },
    {
      label: 'About',
      content: <About />
    }
  ];

  return (
    <>
      <Grid
        container
      >
        {/* <Contact
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
        <Stepper activeStep={activeStep} orientation="vertical" sx={{ height: '100vh' }}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                sx={{
                  color: 'white'
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {step.content}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      color='secondary'
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper> */}

        <Grid
          sx={{
            height: '100vh',
            width: '100vw'
          }}
        >
          <Contact />
          <Intro />
        </Grid>
        <Grid
          sx={{
            height: '100vh',
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

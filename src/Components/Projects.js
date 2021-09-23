import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const Projects = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Typography variant='h3'>Here are some projects that I have worked on</Typography>
        <Grid
          item
          xs={3}
        >
          <Paper
            elevation={12}
            sx={{
              width: 300,
              height: 350,
            }}
          >Project</Paper>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper
            elevation={12}
            sx={{
              width: 300,
              height: 350,
            }}
          >Project</Paper>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper
            elevation={12}
            sx={{
              width: 300,
              height: 350,
            }}
          >Project</Paper>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper
            elevation={12}
            sx={{
              width: 300,
              height: 350,
            }}
          >Project</Paper>
        </Grid>
      </Grid>
    </>
  )

}

export default Projects

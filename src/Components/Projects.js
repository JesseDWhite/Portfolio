import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';

const Projects = () => {
  return (
    <>
      <Box
        display='flex'
      >
        <Grid
          container
          direction='row'
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography variant='h3'>Here are some projects that I have worked on</Typography>
          <Grid
            item
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
      </Box>
    </>
  )

}

export default Projects

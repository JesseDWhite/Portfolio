import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { PROJECTS } from '../Constants/ProjectsConstants';

const Projects = () => {
  return (
    <>
      <Typography variant='h3'>Here are some projects that I have worked on</Typography>
      <Box
        display='flex'
      >
        <Grid
          container
          direction='row'
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {PROJECTS.map(project => {
            return (
              <Paper
                elevation={12}
                sx={{
                  width: 300,
                }}
              >
                <Typography>
                  {project.name}
                </Typography>
                <Typography>
                  {project.techStack.map(language => {
                    return (
                      <li>{language}</li>
                    )
                  })}
                </Typography>
                <Typography>
                  {project.description}
                </Typography>
                <Typography>
                  {project.link}
                </Typography>
                <Typography>
                  {project.repo}
                </Typography>
              </Paper>
            )
          })}
        </Grid>
      </Box>
    </>
  )

}

export default Projects

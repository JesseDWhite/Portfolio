import React from 'react';
import { Typography, Grid, Paper, Box, Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Chip, Avatar } from '@mui/material';
import { PROJECTS } from '../Constants/ProjectsConstants';
import { GitHub } from '@mui/icons-material';

const Projects = () => {
  return (
    <>
      <Typography variant='h3'>Here are some projects that I have worked on</Typography>
      <Grid
        display='flex'
        flexWrap='wrap'
      >
        <Grid
          container
          direction='row'
          alignItems="flex-start"
          justifyContent="space-around"
        >
          {PROJECTS.map(project => {
            return (
              <Card sx={{
                maxWidth: 425,
                margin: 10,
                borderRadius: 5,
                backgroundColor: 'rgb(23,58,94)',
                color: 'white',
                '&: hover': {
                  boxShadow: '0px 0px 30px pink'
                }
              }}>
                <CardActionArea
                  href={project.link}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                  />
                  <CardContent
                    sx={{
                      padding: 3,
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.techStack.map(language => {
                        return (
                          <Chip
                            color="secondary"
                            size="small"
                            label={language}
                            avatar={<Avatar>{language[0]}</Avatar>}
                            sx={{
                              marginRight: 1,
                              marginBottom: 1
                            }}
                          />
                        )
                      })}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="block"
                    color="secondary"
                    variant="contained"
                    href={project.repo}
                    startIcon={<GitHub />}
                    sx={{
                      margin: 2,
                      width: '100%'
                    }}
                  >
                    Repo
                  </Button>
                </CardActions>
              </Card>
            )
          })}
        </Grid>
      </Grid>
    </>
  )

}

export default Projects

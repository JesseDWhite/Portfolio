import React from 'react';
import { Typography, Grid, Paper, Box, Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Chip, Avatar, Tooltip, Fade, Zoom, Grow } from '@mui/material';
import { PROJECTS } from '../Constants/ProjectsConstants';
import { GitHub } from '@mui/icons-material';

const Projects = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: 'rgb(10,25,41)',
          boxShadow: 'none',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            margin: 2
          }}
        >
          Here are some projects that I have worked on
        </Typography>
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
                <Card
                  elevation={5}
                  sx={{
                    position: 'relative',
                    bottom: 0,
                    maxWidth: 425,
                    margin: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgb(23,58,94)',
                    color: 'white',
                    transition: 'bottom 0.50s, boxShadow 0.50s',
                    '&: hover': {
                      boxShadow: '0px 0px 0px 3px pink',
                      bottom: 20
                    }
                  }}>
                  <Tooltip
                    title={<h3>VIEW FULL SITE</h3>}
                    placement='top'
                    TransitionComponent={Grow}
                    enterDelay={800}
                    TransitionProps={{ timeout: 300 }}
                    arrow
                  >
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
                  </Tooltip>
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
      </Card>
    </>
  )

}

export default Projects

import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Chip, Avatar, Tooltip, Grow } from '@mui/material';
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
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '60px',
            textShadow: 'rgb(6,16,26) -4px 0px 0px',
            color: 'rgb(77,72,152)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundSize: 'fill',
            marginTop: 8
          }}
        >
          Below are projects of note I have worked on
        </Typography>
        <Grid
          display='flex'
          flexWrap='wrap'
        >
          <Grid
            container
            direction='row'
            alignItems="center"
            justifyContent="flex-start"
          >
            {PROJECTS.map(project => {
              return (
                <Grid
                  md={12}
                  lg={6}
                  xl={4}
                >
                  <Card
                    elevation={5}
                    sx={{
                      position: 'relative',
                      bottom: 0,
                      // maxWidth: 450,
                      // width: '90%',
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
                        target='_blank'
                        rel='noopener noreferrer'
                        href={project.link}
                      >
                        <CardMedia
                          component="img"
                          height="250"
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
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Card>
    </>
  )

}

export default Projects

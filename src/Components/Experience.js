import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Chip,
  Button
} from '@mui/material'
import Work from '../img/Work.jpg';
import { EXPERIENCECONSTANTS } from '../Constants/ExperienceConstants';
import Resume from '../doc/Resume - Jesse White.pdf';

const Experience = (props) => {

  const { viewPort } = props;

  return (
    <>
      <Card
        sx={{
          borderRadius: 0,
          boxShadow: 'none',
          backgroundColor: '#130f40',
          backgroundImage: 'linear-gradient(315deg, #130f40 0%, #000000 74%)',
        }}
      >
        <Grid
          container
          sx={{
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <img src={Work}
            style={{
              width: '100%',
              height: '60vh',
              objectFit: 'cover',
              objectPosition: '12% 12%'
            }}
            alt='Jesse and Katherine in the forest'
          />
          <Typography
            variant='h3'
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontWeight: 'bold',
              fontSize: viewPort < 600 ? 60 : 100,
              textShadow: 'rgb(10,25,41) -8px 0px 0px',
              color: 'lightgray'
            }}
          >
            EXPERIENCE
            <Typography>
              <a
                style={{
                  textDecoration: 'none'
                }}
                href={Resume}
                download='Jesse White'>
                <Button
                  color='secondary'
                  variant='contained'
                >
                  Download Resume
                </Button>
              </a>
            </Typography>
          </Typography>

        </Grid>
        <Grid
          display='flex'
          flexWrap='wrap'
          sx={{
            color: 'white',
            minHeight: '100vh'
          }}
        >
          <Grid
            container
            direction='row'
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {EXPERIENCECONSTANTS.map(experience => {
              return (
                <Grid
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <Card
                    elevation={5}
                    sx={{
                      position: 'relative',
                      bottom: 0,
                      margin: viewPort < 600 ? 1 : 10,
                      marginBottom: viewPort < 600 ? 5 : 'none',
                      marginTop: viewPort < 600 ? 5 : 'none',
                      borderRadius: 5,
                      backgroundColor: 'rgb(23,58,94)',
                      color: 'white',
                      transition: 'bottom 0.50s, boxShadow 0.50s',
                      '&: hover': {
                        boxShadow: '0px 0px 0px 3px aqua',
                        bottom: 8
                      }
                    }}
                  >
                    <CardActionArea
                      target='_blank'
                      rel='noopener noreferrer'
                      href={experience.link}
                    >
                      <CardContent
                        sx={{
                          padding: 3,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          {experience.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            textAlign: 'center',
                            fontSize: 20
                          }}
                        >
                          {experience.title}
                        </Typography>
                        <Chip
                          label={`${experience.startDate} - ${experience.endDate}`}
                          color='secondary'
                          sx={{
                            marginBottom: 1,
                            position: 'relative',
                            left: '50%',
                            transform: 'translate(-50%)',
                          }}
                        />
                        <Typography
                          sx={{
                            fontStyle: 'italic',
                            textAlign: 'center',
                            fontSize: 15
                          }}
                          variant="body2"
                        >
                          {experience.jobDescription}
                        </Typography>
                        <hr />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: 15
                          }}
                        >
                          {experience.jobDuties.map(duty => {
                            return (
                              <Typography
                                sx={{
                                  marginBottom: 1
                                }}
                              >{duty}
                              </Typography>
                            )
                          })}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
            }
          </Grid>
        </Grid>
      </Card>
    </>
  )

}

export default Experience;
import React from 'react';
import {
  Typography,
  Card,
  Grid,
} from '@mui/material'
import Forest from '../img/Forest.jpg';
import Form from '../Forms/Form';
import { ABOUTCONSTANTS } from '../Constants/AboutConstants';

const About = (props) => {

  const { viewPort } = props;

  return (
    <>
      <Card
        sx={{
          height: '100%',
          backgroundColor: 'rgb(10,25,41)',
          paddingBottom: 5
        }}
      >
        <Grid
          container
          sx={{
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <img src={Forest}
            style={{
              width: '100%',
              height: '60vh',
              objectFit: 'cover',
              objectPosition: '12% 20%'
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
              fontSize: 100,
              textShadow: 'rgb(10,25,41) -8px 0px 0px',
              color: 'lightgray'
            }}
          >
            ABOUT ME
          </Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Grid
            xl={6}
            lg={12}
          >
            <Card
              elevation={5}
              sx={{
                position: 'relative',
                bottom: 0,
                marginLeft: viewPort < 600 ? 1 : 10,
                marginTop: viewPort < 600 ? 5 : 10,
                marginRight: viewPort < 600 ? 1 : 10,
                padding: 3,
                borderRadius: 5,
                backgroundColor: 'rgb(23,58,94)',
                color: 'white',
                transition: 'bottom 0.50s, boxShadow 0.50s',
              }}
            >
              {ABOUTCONSTANTS.map(paragraph => {
                return (
                  <Typography
                    sx={{
                      fontSize: '18px',
                      marginBottom: 5,
                      '&: last-child': {
                        marginBottom: 0
                      }
                    }}
                  >
                    {paragraph.bio}
                  </Typography>
                )
              })}
            </Card>
          </Grid>
          <Grid
            xl={6}
            lg={12}
          >
            <Form
              viewPort={viewPort}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  )

}

export default About;
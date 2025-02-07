import React from 'react';
import {
  Typography,
  Card,
  Grid,
  Chip
} from '@mui/material'
import Forest from '../img/Forest.jpg';
import Form from '../Forms/Form';
import { ABOUTCONSTANTS } from '../Constants/AboutConstants';
import { Element, Link } from 'react-scroll';

const About = (props) => {

  const { viewPort } = props;

  return (
    <>
      <Card
        sx={{
          height: '100%',
          boxShadow: 'none',
          backgroundColor: '#130f40',
          backgroundImage: 'linear-gradient(315deg, #130f40 0%, #000000 74%)',
          paddingBottom: 2,
          borderRadius: 0
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
              fontSize: viewPort < 600 ? 60 : 100,
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
                marginBottom: viewPort < 600 ? 5 : 'none',
                marginRight: viewPort < 600 ? 1 : 10,
                padding: viewPort < 600 ? 1.75 : 3,
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
            sx={{
              width: '100%'
            }}
          >
            <Element name='contact' className='element'>
              <Form
                viewPort={viewPort}
              />
            </Element>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: 'center',
            paddingY: '15px'
          }}
        >
          <Link
            activeClass='active'
            className='top'
            to={'top'}
            spy={true}
            smooth={true}
            duration={2500}>
            <Chip
              label='BACK TO TOP'
              clickable
              variant='contained'
              color='secondary'
              sx={{
                backgroundColor: 'rgb(128,128,128, 50%)',
                width: 180
              }}
            />
          </Link>
        </Typography>
      </Card>
    </>
  )

}

export default About;
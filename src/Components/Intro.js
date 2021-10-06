import React from 'react';
import { Typography, Card, IconButton, Grid } from '@mui/material';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';

const Intro = (props) => {

  const { background, changeBackgroundImage } = props

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'rgb(6, 16, 26)',
          boxShadow: 'none',
        }}
      >
        <Grid
          lg={6}
        >
          <Typography
            variant='h2'
            sx={{
              position: 'relative',
              left: '10vw',
              top: '20vh',
              fontSize: '8vw',
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.5px aqua',
              backgroundImage: `url(${background})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(0,255,255,50%)',
                left: 70,
                WebkitTextStroke: '0.5px aqua',
              }
            }}
          >
            HI THERE,
          </Typography>
        </Grid>
        <Grid
          lg={12}
        >
          <Typography
            variant='h1'
            sx={{
              position: 'relative',
              left: '10vw',
              top: '20vh',
              fontSize: '10.417rem',
              fontWeight: 'bold',
              color: 'rgb(255,165,0,0%)',
              WebkitTextStroke: '1.5px orange',
              backgroundImage: `url(${background})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,165,0,50%)',
                left: 220,
                WebkitTextStroke: '1.5px orange',
              }
            }}
          >
            I'M JESSE
          </Typography>
        </Grid>
        <Grid
          lg={12}
        >
          <Typography
            variant='h3'
            sx={{
              position: 'relative',
              left: '10vw',
              top: '20vh',
              fontSize: '5vw',
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.5px aqua',
              backgroundImage: `url(${background})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(0,255,255,50%)',
                left: 100,
                WebkitTextStroke: '0.5px aqua',
              }
            }}>
            Full - Stack Developer
          </Typography>
        </Grid>
        <IconButton
          variant='contained'
          sx={{
            marginLeft: 12,
            marginTop: 15,
            marginBottom: 15
          }}
          onClick={() => changeBackgroundImage()}>
          <ColorLensTwoToneIcon
            color='primary'
            aria-label="change background image"
            sx={{
              position: 'relative',
              top: '20vh',
              left: '10vw',
              opacity: '50%',
              fontSize: '10%',
              transition: 'color 0.25s, opacity 0.25s',
              '&: hover': {
                color: 'orange',
                opacity: '100%'
              }
            }}
          />
        </IconButton>
      </Card>
    </>
  )
}

export default Intro;
import React from 'react';
import { Typography, Card, IconButton, Grid } from '@mui/material';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';

const Intro = (props) => {

  const {
    background,
    viewPort,
    theme,
    setTheme
  } = props

  return (
    <>
      <Card
        className='test2'
        sx={{
          // backgroundColor: 'rgb(6, 16, 26)',
          boxShadow: 'none',
        }}
      >
        <Grid
          lg={6}
        >
          <Typography
            variant='h2'
            className='test'
            sx={{
              textAlign: viewPort < 800 ? 'center' : null,
              position: 'relative',
              left: viewPort < 800 ? 0 : 50,
              top: viewPort < 800 ? 100 : 120,
              fontSize: viewPort < 800 ? '20vw' : '8vw',
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.5px aqua',
              // backgroundImage: `url(${background})`,
              //     backgroundImage: `linear-gradient(
              //       -45deg, 
              //       rgba(59,173,227,1) 0%, 
              //       rgba(87,111,230,1) 25%, 
              //       rgba(152,68,183,1) 51%, 
              //       rgba(255,53,127,1) 100%
              // )`,
              // animation: 'animation: AnimateBG 20s ease infinite',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(0,255,255,50%)',
                left: viewPort < 800 ? 'none' : 70,
                WebkitTextStroke: '0.5px aqua',
                cursor: 'arrow',
                userSelect: 'none'
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
            className='test'
            sx={{
              textAlign: viewPort < 800 ? 'center' : null,
              position: 'relative',
              left: viewPort < 800 ? 0 : 200,
              top: viewPort < 800 ? 100 : 120,
              fontSize: viewPort < 800 ? '30vw' : '15vw',
              fontWeight: 'bold',
              color: 'rgb(255,165,0,0%)',
              WebkitTextStroke: '1.5px orange',
              // backgroundImage: `url(${background})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,165,0,50%)',
                left: viewPort < 800 ? 'none' : 220,
                WebkitTextStroke: '1.5px orange',
                cursor: 'arrow',
                userSelect: 'none'
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
            className='test'
            sx={{
              textAlign: viewPort < 800 ? 'center' : null,
              position: 'relative',
              left: viewPort < 800 ? 0 : 90,
              top: viewPort < 800 ? 100 : 120,
              fontSize: viewPort < 800 ? '18vw' : '5vw',
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.5px aqua',
              // backgroundImage: `url(${background})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(0,255,255,50%)',
                left: viewPort < 800 ? 'none' : 100,
                WebkitTextStroke: '0.5px aqua',
                cursor: 'arrow',
                userSelect: 'none'
              }
            }}>
            Full - Stack Developer
          </Typography>
        </Grid>
        <IconButton
          variant='contained'
          sx={{
            position: 'relative',
            left: viewPort < 800 ? 0 : 90,
            top: viewPort < 800 ? 110 : 120,
            marginBottom: 20
          }}
          onClick={() => setTheme(!theme)}>
          <ColorLensTwoToneIcon
            color='primary'
            aria-label="change background image"
            sx={{
              opacity: '50%',
              fontSize: '50px',
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
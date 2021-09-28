import React from 'react';
import { Typography, Card, IconButton } from '@mui/material';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';

const Intro = (props) => {

  const { background, changeBackgroundImage } = props

  return (
    <>
      <Card
        sx={{
          height: '100vh',
          backgroundColor: 'rgb(6, 16, 26)'
        }}
      >
        <Typography
          variant='h2'
          sx={{
            position: 'relative',
            left: 50,
            top: 120,
            fontSize: 150,
            fontWeight: 'bold',
            color: 'rgb(0,255,255,20%)',
            // WebkitTextStroke: '0.5px aqua',
            backgroundImage: `url(${background})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            // backgroundSize: 'cover',
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
        <Typography
          variant='h1'
          sx={{
            position: 'relative',
            left: 200,
            top: 120,
            fontSize: 250,
            fontWeight: 'bold',
            color: 'rgb(255,165,0,30%)',
            // WebkitTextStroke: '1.5px orange',
            backgroundImage: `url(${background})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            // backgroundSize: 'cover',
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
        <Typography
          variant='h3'
          sx={{
            position: 'relative',
            left: 90,
            top: 120,
            fontSize: 80,
            fontWeight: 'bold',
            color: 'rgb(0,255,255,20%)',
            // WebkitTextStroke: '0.5px aqua',
            backgroundImage: `url(${background})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            // backgroundSize: 'cover',
            transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
            '&: hover': {
              color: 'rgb(0,255,255,50%)',
              left: 100,
              WebkitTextStroke: '0.5px aqua',
            }
          }}>
          Full - Stack Developer
        </Typography>
        <IconButton
          variant='contained'
          sx={{
            marginLeft: 12,
            marginTop: 15
          }}
          onClick={() => changeBackgroundImage()}>
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
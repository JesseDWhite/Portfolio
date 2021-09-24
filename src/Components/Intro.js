import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { BACKGROUNDGIFS } from '../Constants/BackGroundConstants';

const Intro = () => {
  const [background, setBackground] = useState();

  useEffect(() => {
    const randomBackground = BACKGROUNDGIFS[Math.floor(Math.random() * BACKGROUNDGIFS.length)];
    setBackground(randomBackground);
  }, [])

  return (
    <>
      <Typography
        variant='h2'
        sx={{
          position: 'relative',
          left: 85,
          top: 80,
          fontSize: 150,
          fontWeight: 'bold',
          color: 'rgb(0,255,255,0%)',
          WebkitTextStroke: '0.5px aqua',
          backgroundImage: `url(${background})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          backgroundSize: 'cover',
          transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
          '&: hover': {
            color: 'rgb(255,165,0,50%)',
            left: 100,
            WebkitTextStroke: '0.5px orange',
          }
        }}
      >
        HI THERE
      </Typography>
      <Typography
        variant='h1'
        sx={{
          position: 'relative',
          left: 80,
          top: 80,
          fontSize: 250,
          fontWeight: 'bold',
          color: 'rgb(0,255,255,0%)',
          WebkitTextStroke: '0.5px aqua',
          backgroundImage: `url(${background})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          backgroundSize: 'cover',
          transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
          '&: hover': {
            color: 'rgb(255,165,0,50%)',
            left: 100,
            WebkitTextStroke: '0.5px orange',
          }
        }}
      >
        I'M JESSE
      </Typography>
      <Typography
        variant='h5'
        sx={{
          position: 'relative',
          left: 90,
          top: 80,
          fontSize: 80,
          fontWeight: 'bold',
          color: 'rgb(0,255,255,0%)',
          WebkitTextStroke: '0.5px aqua',
          backgroundImage: `url(${background})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          backgroundSize: 'cover',
          transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
          '&: hover': {
            color: 'rgb(255,165,0,50%)',
            left: 100,
            WebkitTextStroke: '0.5px orange',
          }
        }}>
        Full - Stack Developer
      </Typography>
    </>
  )
}

export default Intro;
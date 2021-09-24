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
          left: 50,
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
          left: 180,
          top: 80,
          fontSize: 250,
          fontWeight: 'bold',
          color: 'rgb(0,255,255,0%)',
          WebkitTextStroke: '1.5px orange',
          backgroundImage: `url(${background})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          backgroundSize: 'cover',
          transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
          '&: hover': {
            color: 'rgb(255,165,0,50%)',
            left: 200,
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
            color: 'rgb(0,255,255,50%)',
            left: 100,
            WebkitTextStroke: '0.5px aqua',
          }
        }}>
        Full - Stack Developer
      </Typography>
    </>
  )
}

export default Intro;
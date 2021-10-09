import React from 'react';
import { Link } from 'react-scroll';
import { Grid, Typography, Chip } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Grid
        sx={{
          position: 'relative',
          width: '100%',
          height: '70px',
          padding: '20px',
          bottom: 0,
          backgroundColor: 'rgb(10,25,41)'
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
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
      </Grid>
    </>
  )
}

export default Footer;
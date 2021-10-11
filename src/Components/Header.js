import React from 'react';
import { Link } from 'react-scroll';
import { Grid, Typography, Chip } from '@mui/material';
import { TABS } from '../Constants/TabsConstants';
import Contact from './Contact';

const Header = () => {
  return (
    <>
      <Grid
        sx={{
          position: 'fixed',
          width: '100%',
          height: '70px',
          padding: '20px',
          top: 0,
          backgroundColor: 'rgb(6,16,26,100%)',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          {TABS.map(tab => {
            return (
              <Link
                activeClass='active'
                className='header'
                to={tab.link}
                spy={true}
                smooth={true}
                duration={2000}
                offset={-70}
              >
                <Chip
                  label={tab.tabName}
                  clickable
                  variant='contained'
                  color='secondary'
                  sx={{
                    backgroundColor: 'rgb(128,128,128, 0%)',
                    width: 180,
                    marginRight: 3
                  }}
                />
              </Link>
            );
          })}
          <Contact />
        </Typography>
      </Grid>
    </>
  );
}

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Grid, Typography, Chip, Box, Select, MenuItem, FormControl } from '@mui/material';
import { TABS } from '../Constants/TabsConstants';
import Contact from './Contact';
import { styled } from '@mui/material/styles';

const Header = (props) => {

  const { viewPort } = props;

  const StyledSelectField = styled(Select)({
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'aqua',
    },
    '& .MuiOutlinedSelectInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'aqua',
      },
    },
  });

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
            textAlign: viewPort < 1050 ? 'start' : 'center',
            fontWeight: viewPort < 1050 ? 'bold' : null
          }}
        >
          {viewPort < 1050 ?
            <FormControl
              fullWidth
              label='where to?'
              sx={{
                color: 'white'
              }}
            >
              <StyledSelectField
                defaultValue='HOME'
                placeholder='WHERE TO?'
                variant='outlined'
              >
                {TABS.map(tab => {
                  return (
                    <MenuItem>
                      <Link
                        to={tab.link}
                        activeClass='active'
                        className='header'
                        spy={true}
                        smooth={true}
                        duration={2000}
                        offset={-70}>
                        {tab.tabName}
                      </Link>
                    </MenuItem>
                  )
                })}
              </StyledSelectField>
            </FormControl>
            :
            TABS.map(tab => {
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
            })
          }
          <Contact
            viewPort={viewPort}
          />
        </Typography>
      </Grid>
    </>
  );
}

export default Header;
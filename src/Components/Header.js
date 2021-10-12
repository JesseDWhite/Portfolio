import React from 'react';
import { Link } from 'react-scroll';
import { Grid, Typography, Chip, Menu, MenuItem, IconButton, Fade } from '@mui/material';
import { TABS } from '../Constants/TabsConstants';
import Contact from './Contact';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { MenuRounded } from '@mui/icons-material';

const Header = (props) => {

  const { viewPort } = props;

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
            <PopupState variant="popover">
              {(popupState) => (
                <>
                  <IconButton
                    size='small'
                    sx={{
                      color: 'lightgray'
                    }}
                    {...bindTrigger(popupState)}
                  >
                    <MenuRounded fontSize='large' />
                  </IconButton>
                  <Menu
                    {...bindMenu(popupState)}
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 500 }}
                  >
                    {TABS.map(tab => {
                      return (
                        <MenuItem>
                          <Link
                            activeClass='active'
                            className='header'
                            to={tab.link}
                            spy={true}
                            smooth={true}
                            duration={2000}
                            offset={-70}
                            onClick={popupState.close}
                          >
                            {tab.tabName}
                          </Link>
                        </MenuItem>
                      )
                    })}
                  </Menu>
                </>
              )}
            </PopupState>
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
                      marginRight: 3,

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
      </Grid >
    </>
  );
}

export default Header;
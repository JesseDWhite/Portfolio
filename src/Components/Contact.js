import React from 'react';
import { SpeedDial, SpeedDialAction, Fade } from '@mui/material';
import {
  GitHub,
  LinkedIn,
  PhoneIphoneTwoTone,
  EmailTwoTone,
  VideoCameraFrontTwoTone
} from '@mui/icons-material';
import HeadShot from '../img/HeadShot.jpg';
import Button from '@mui/material/Button';

const Contact = (props) => {

  const actions = [
    {
      icon: <GitHub />,
      name: 'GitHub',
      route: 'https://github.com/JesseDWhite'
    },
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      route: 'https://www.linkedin.com/in/jesse-d-white/'
    },
    {
      icon: <PhoneIphoneTwoTone />,
      name: '503.523.7527',
      route: 'tel:5035237527'
    },
    {
      icon: <EmailTwoTone />,
      name: 'jesse.white6@gmail.com',
      route: 'https://mail.google.com/mail/?view=cm&fs=1&to=jesse.white6@gmail.com'
    },
    {
      icon: <VideoCameraFrontTwoTone />,
      name: 'Discord',
      route: 'https://discordapp.com/users/9372/'
    }
  ]

  return (
    <>
      <SpeedDial
        ariaLabel="Contact Information"
        sx={{
          position: 'fixed',
          top: 80,
          right: 80,
          transition: 'right 0.50s',
          '&: hover': {
            right: 90,
          }
        }}
        direction='down'
        icon={<img
          src={HeadShot}
          alt='Jesse White Headshot'
          style={{
            width: 80,
            borderRadius: '100%',
            border: 'solid',
            borderColor: 'aqua',
          }}
        />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{
              "&:hover": {
                background: 'lightblue',
              },
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={
              <h2
                style={{
                  color: 'lightblue',
                }}>
                {action.name}
              </h2>}
            href={action.route}
            TransitionComponent={Fade}
          />
        ))}
      </SpeedDial>
    </>
  )
}

export default Contact
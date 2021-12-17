import React from 'react';
import { SpeedDial, SpeedDialAction, Grow } from '@mui/material';
import {
  GitHub,
  LinkedIn,
  PhoneIphoneTwoTone,
  EmailTwoTone,
  VideoCameraFrontTwoTone
} from '@mui/icons-material';
import HeadShot from '../img/HeadShot.jpg';

const Contact = (props) => {

  const { viewPort } = props;

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
          top: viewPort < 600 ? 25 : 35,
          right: viewPort < 600 ? 25 : 80,
          transition: 'right 0.50s',
        }}
        direction='down'
        icon={<img
          src={HeadShot}
          alt='Jesse White Headshot'
          style={{
            width: viewPort < 600 ? 80 : 90,
            borderRadius: '100%',
            border: 'solid',
            borderWidth: viewPort < 600 ? 8 : 12,
            borderColor: 'rgb(6,16,26)',
          }}
        />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{
              '&: first-child': {
                marginTop: 3
              }
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={
              <h2>{action.name}</h2>}
            target='_blank'
            rel='noopener noreferrer'
            href={action.route}
            TransitionComponent={Grow}
            TransitionProps={{ timeout: 300 }}
          />
        ))}
      </SpeedDial>
    </>
  )
}

export default Contact;
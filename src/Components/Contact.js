import React from 'react';
import { Link, SpeedDial, Box, SpeedDialAction } from '@mui/material';
import { GitHub, LinkedIn, PhoneIphone, Email, EmojiPeopleRounded, VideoCameraFront } from '@mui/icons-material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const Contact = () => {
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
      icon: <PhoneIphone />,
      name: '503.523.7527',
      route: 'tel:5035237527'
    },
    {
      icon: <Email />,
      name: 'jesse.white6@gmail.com',
      route: 'https://mail.google.com/mail/?view=cm&fs=1&to=jesse.white6@gmail.com'
    },
    {
      icon: <VideoCameraFront />,
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
          top: 50,
          right: 50,
          color: 'red'
        }}
        direction='down'
        icon={<SpeedDialIcon openIcon={<EmojiPeopleRounded />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.route}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </>
  )
}

export default Contact
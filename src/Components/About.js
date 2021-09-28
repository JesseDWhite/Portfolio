import React from 'react';
import { Typography, Card, Grid } from '@mui/material'
import Forest from '../img/Forest.jpg';

const About = () => {
  return (
    <>
      <Card
        sx={{
          height: '100%',
          backgroundColor: 'rgb(10,25,41)',
        }}
      >
        <Grid
          container
          sx={{
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <img src={Forest}
            style={{
              width: '100%',
              height: '60vh',
              objectFit: 'cover',
              objectPosition: '12% 12%'
            }}
            alt='Jesse and Katherine in the forest'
          />
          <Typography
            variant='h3'
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontWeight: 'bold',
              fontSize: '100px',
              textShadow: 'rgb(10,25,41) -8px 0px 0px',
              color: 'rgb(77,72,152)',
            }}
          >
            ABOUT ME
          </Typography>
        </Grid>
        <Typography
          sx={{
            color: 'white'
          }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis sit amet ante ut consequat. Quisque sed felis in nunc tempus vestibulum. Maecenas semper massa et augue rutrum iaculis. Morbi at dui vehicula, consequat dolor at, aliquet lacus. Mauris ornare magna vitae nisl accumsan, ut placerat nisl dignissim. Duis fermentum suscipit fermentum. Sed pretium, arcu vitae venenatis consectetur, nibh lorem elementum odio, et molestie sem nisi id magna. Vivamus suscipit ante erat, at eleifend neque viverra ut. Aenean eget augue ut ex dignissim laoreet pretium in sem. Donec dui nulla, ullamcorper a felis nec, iaculis fringilla quam. Aenean dapibus nulla sapien, at dignissim leo tristique quis. Duis sit amet dolor id odio maximus vestibulum eu tincidunt massa.

          Praesent rhoncus dolor nibh, in mattis quam iaculis vel. Phasellus dictum nibh lobortis, consequat sem eget, lacinia arcu. In volutpat auctor ligula, sed aliquam leo gravida non. Aenean efficitur fermentum ultrices. Vivamus eu malesuada orci. Morbi eu est sodales, ullamcorper lorem eu, suscipit velit. Maecenas id pellentesque tellus. Nam congue consequat condimentum. Praesent ornare tortor ex, vitae viverra tellus aliquet at.</Typography>
      </Card>
    </>
  )

}

export default About;
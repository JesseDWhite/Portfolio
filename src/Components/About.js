import React from 'react';
import { Typography, Card } from '@mui/material'

const About = () => {
  return (
    <>
      <Card
        sx={{
          height: '100%',
          backgroundColor: 'rgb(6, 16, 26)'
        }}
      >
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '60px',
            textShadow: 'rgb(10,25,41) -4px 0px 0px',
            color: 'rgb(77,72,152)',
            backgroundClip: 'text',
            marginTop: 8
          }}
        >
          A little more about me
        </Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis sit amet ante ut consequat. Quisque sed felis in nunc tempus vestibulum. Maecenas semper massa et augue rutrum iaculis. Morbi at dui vehicula, consequat dolor at, aliquet lacus. Mauris ornare magna vitae nisl accumsan, ut placerat nisl dignissim. Duis fermentum suscipit fermentum. Sed pretium, arcu vitae venenatis consectetur, nibh lorem elementum odio, et molestie sem nisi id magna. Vivamus suscipit ante erat, at eleifend neque viverra ut. Aenean eget augue ut ex dignissim laoreet pretium in sem. Donec dui nulla, ullamcorper a felis nec, iaculis fringilla quam. Aenean dapibus nulla sapien, at dignissim leo tristique quis. Duis sit amet dolor id odio maximus vestibulum eu tincidunt massa.

          Praesent rhoncus dolor nibh, in mattis quam iaculis vel. Phasellus dictum nibh lobortis, consequat sem eget, lacinia arcu. In volutpat auctor ligula, sed aliquam leo gravida non. Aenean efficitur fermentum ultrices. Vivamus eu malesuada orci. Morbi eu est sodales, ullamcorper lorem eu, suscipit velit. Maecenas id pellentesque tellus. Nam congue consequat condimentum. Praesent ornare tortor ex, vitae viverra tellus aliquet at.</Typography>
      </Card>
    </>
  )

}

export default About;
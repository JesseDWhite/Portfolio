import React from 'react';
import {
  Typography,
  Card,
  Grid,
} from '@mui/material'
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
              objectPosition: '12% 20%'
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
        <Card
          sx={{
            position: 'relative',
            bottom: 0,
            margin: 10,
            padding: 3,
            borderRadius: 5,
            backgroundColor: 'rgb(23,58,94)',
            color: 'white',
            transition: 'bottom 0.50s, boxShadow 0.50s',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              marginBottom: 5
            }}
          >
            Growing up, whenever I was asked what I wanted to be when I grew up, I always said, 'to be either a scientist and an inventor'. Now those are two extremely vague job titles for a 10-year-old to wrap their head around, but I was insistent on that. I did not know what I would specialize in as a scientist, or even any great ideas to become the inventor of. Once I got older and had more experience in life, I assumed that both of those aspirations were out of touch and unachievable. However, I was given an opportunity to act as Director of Operations for a small to medium-size business in 2017. This helped me realize that my original aspirations were not too off base and that I just needed to define what it meant to be a scientist and an inventor.
          </Typography>
          <Typography
            sx={{
              fontSize: '20px',
              marginBottom: 5
            }}
          >
            Through my experience as a Director of Operations, I learned what it truly meant to run a business and the subtle intricacies of staff dynamics, workplace culture, and the importance of tech in any field. My very first task at this new position was to get everything they were currently using for the workflow to a digital form. The business at the time did not have much money since all profits were going back into base operating functions, so these solutions needed to be made from scratch and in-house. After a lot of trial and error, I was able to piece together multiple web-based applications that digitized all timesheets, employee information and tracking, job orders and general workflow, and much more. Through this success, I realized that I was not too far off my childhood goal of inventing and becoming a scientist.
          </Typography>
          <Typography
            sx={{
              fontSize: '20px',
              marginBottom: 5
            }}
          >
            I was later given an opportunity to leave my job and pursue what I found along the way; coding and web-based application development. Coding allowed me to take an idea that I had and put it into a physical form, even if it is just a basic calculator. This fulfilled my desire to invent. It also allowed me to try different ideas and theories for applying an idea to a through trial and error. This then fulfilled my aspiration of becoming a scientist even if not directly.
          </Typography>
          <Typography
            sx={{
              fontSize: '20px',
              marginBottom: 5
            }}
          >
            My biggest takeaway so far is that your childhood aspirations may not go away, but simply show up in different ways. I was lucky enough to find mine through business operations and coding. I love being able to put some text into a code editor and see it come to life. It feels like magic every time I do it.
          </Typography>
        </Card>
      </Card>
    </>
  )

}

export default About;
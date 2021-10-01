import React from 'react';
import {
  Typography,
  Card,
  Grid,
  CardMedia
} from '@mui/material'
import Forest from '../img/Forest.jpg';
import Form from './Form';

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
              fontSize: 100,
              textShadow: 'rgb(10,25,41) -8px 0px 0px',
              // color: 'rgb(77,72,152)',
              color: 'lightgray'
            }}
          >
            ABOUT ME
          </Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Grid
            xl={6}
            lg={12}
          >
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
                  fontSize: '18px',
                  marginBottom: 5
                }}
              >
                I graduated from a 27-week program with Epicodus with an emphasis in C# and .NET framework, as well as the standard HTML, JavaScript, and CSS. The program taught me the benefits of programming and the best practices for the space. It was very early on that I discovered a passion for UI design. I enjoy the challenge of determining how to offer the richest experience to the end user by the way of tested implementation through test driven development practices. It has been my time at VALIDATE while utilizing the React framework that really forced me to take on the role of the end user to design and implement changes on an interface to offer the highest quality experience.
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  marginBottom: 5
                }}
              >
                During Epicodus’s pair-programming curriculum, I was able to work on several collaborative team projects, which gave me some insight into how much of the tech industry relies on whole-team operations. In fact,  I collaborated on a project with four other team members to provide a web-based application that gives the end user real-time information on our National Parks. While my personal responsibility was to chain a weather API query to the National Parks Service Database for local weather information per park, I also maintained constant remote communication with the members of my team to ensure each piece of the application fit together for full functionality. The program utilized JavaScript as a front-end and NodeJS as a back-end to make API calls through Open Weather and upon completion was merged into the main branch of the project. This project bolstered my ability to effectively communicate the minimum viable product to a team, test my implementation with consistent documentation, and navigate the GitHub workflow.
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                }}
              >
                Prior to completing my education in programming, I was a Director of Operations for a small business in downtown Portland. I held this position for nearly five years and became a catalyst for the business's growth to the sustainable model it is today. While working there I created a database and tracking system for employee and customer information, current and outgoing job orders, daily timesheets for billable hours, and a cradle to grave tracking system for medical waste transport and disposal. I lead a team of 50 members, and I personally worked with and trained them daily. One of my biggest areas of growth during my tenure was learning to meet people where they are to foster growth. I worked with a highly vulnerable community and a staff that required coaching in respecting the delicacy of every interaction with local people. I infused the value of fostering strong interpersonal skills into the company, which allowed us to offer our staff the resources and education they needed to be successful in the field.
              </Typography>
            </Card>
          </Grid>
          <Grid
            xl={6}
            lg={12}
          >
            <Card
              sx={{
                position: 'relative',
                bottom: 0,
                margin: 10,
                borderRadius: 5,
                backgroundColor: 'rgb(23,58,94)',
                color: 'white',
                transition: 'bottom 0.50s, boxShadow 0.50s',
              }}
            >
              <Typography
                sx={{
                  fontSize: '18px',
                  padding: 3
                }}
              >
                <Form />
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  )

}

export default About;
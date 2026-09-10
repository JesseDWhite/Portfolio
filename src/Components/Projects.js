import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Avatar,
} from "@mui/material";
import { PROJECTS } from "../Constants/ProjectsConstants";
import { GitHub } from "@mui/icons-material";
import Programming from "../img/Programming.jpg";

const Projects = (props) => {
  const { viewPort } = props;

  return (
    <>
      <Card
        sx={{
          borderRadius: 0,
          boxShadow: "none",
          backgroundColor: "#434343",
          backgroundImage: "linear-gradient(147deg, #434343 0%, #000000 74%)",
        }}
      >
        <Grid
          container
          sx={{
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={Programming}
            style={{
              width: "100%",
              height: "60vh",
              objectFit: "cover",
              objectPosition: "12% 12%",
            }}
            alt="Jesse and Katherine in the forest"
          />
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: viewPort < 600 ? 60 : 100,
              textShadow: "rgb(10,25,41) -8px 0px 0px",
              color: "lightgray",
            }}
          >
            PORTFOLIO
          </Typography>
        </Grid>
        <Grid display="flex" flexWrap="wrap">
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {PROJECTS.map((project) => {
              return (
                <Grid md={12} lg={6} xl={4}>
                  <Card
                    elevation={5}
                    sx={{
                      position: "relative",
                      bottom: 0,
                      margin: viewPort < 600 ? 1 : 10,
                      marginBottom: viewPort < 600 ? 5 : "none",
                      marginTop: viewPort < 600 ? 5 : "none",
                      borderRadius: 2,
                      backgroundColor: "#434343",
                      color: "white",
                      transition: "bottom 0.25s, boxShadow 0.25s",
                      "&: hover": {
                        boxShadow: "0px 0px 0px 2px white",
                        bottom: 3,
                      },
                    }}
                  >
                    <CardActionArea
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      <CardMedia
                        component="img"
                        height="250"
                        image={project.image}
                        alt={`${project.name} splash page`}
                      />
                      <CardContent
                        sx={{
                          padding: 3,
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {project.name}
                        </Typography>
                        <Typography variant="body2">
                          {project.techStack.map((language) => {
                            return (
                              <Chip
                                size="small"
                                label={language.lang}
                                avatar={
                                  <Avatar>{<img src={language.icon} />}</Avatar>
                                }
                                sx={{
                                  marginRight: 1,
                                  marginBottom: 1,
                                  color: "black",
                                  backgroundColor: "white",
                                }}
                              />
                            );
                          })}
                        </Typography>
                        <hr />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "15px",
                          }}
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="block"
                        variant="contained"
                        href={project.repo}
                        startIcon={<GitHub />}
                        sx={{
                          margin: 2,
                          width: "100%",
                          color: "black",
                          backgroundColor: "white",
                          "&:hover": {
                            backgroundColor: "#b3b3b3",
                          },
                        }}
                      >
                        Repo
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Projects;

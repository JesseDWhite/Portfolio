import React from "react";
import { Typography, Card, IconButton, Grid } from "@mui/material";
import ColorLensTwoToneIcon from "@mui/icons-material/ColorLensTwoTone";

const Intro = (props) => {
  const { background, viewPort, theme, setTheme } = props;

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          backgroundColor: "#434343",
          backgroundImage: "linear-gradient(147deg, #434343 0%, #000000 74%)",
          height: "100vh",
        }}
      >
        <Grid lg={6}>
          <Typography
            variant="h2"
            onClick={() => setTheme(!theme)}
            sx={{
              textAlign: viewPort < 800 ? "center" : null,
              position: "relative",
              left: viewPort < 800 ? 0 : 50,
              top: viewPort < 800 ? 100 : 120,
              fontSize: viewPort < 800 ? "20vw" : "8vw",
              fontWeight: "bold",
              color: "rgb(0,255,255,0%)",
              WebkitTextStroke: "0.5px white",
              backgroundImage: `url(${background})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              transition: "color 0.50s, left 0.50s, -webkit-text-stroke 0.50s",
              "&: hover": {
                color: "rgb(255,255,255,50%)",
                left: viewPort < 800 ? "none" : 70,
                WebkitTextStroke: "0.5px white",
                cursor: "pointer",
                userSelect: "none",
              },
            }}
          >
            HI THERE,
          </Typography>
        </Grid>
        <Grid lg={12}>
          <Typography
            variant="h1"
            onClick={() => setTheme(!theme)}
            sx={{
              textAlign: viewPort < 800 ? "center" : null,
              position: "relative",
              left: viewPort < 800 ? 0 : 200,
              top: viewPort < 800 ? 100 : 120,
              fontSize: viewPort < 800 ? "30vw" : "15vw",
              fontWeight: "bold",
              color: "rgb(255,165,0,0%)",
              WebkitTextStroke: "1.5px white",
              backgroundImage: `url(${background})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              transition: "color 0.50s, left 0.50s, -webkit-text-stroke 0.50s",
              "&: hover": {
                color: "rgb(255,255,255,50%)",
                left: viewPort < 800 ? "none" : 220,
                WebkitTextStroke: "1.5px gold",
                cursor: "pointer",
                userSelect: "none",
              },
            }}
          >
            I'M JESSE
          </Typography>
        </Grid>
        <Grid lg={12}>
          <Typography
            variant="h3"
            onClick={() => setTheme(!theme)}
            sx={{
              textAlign: viewPort < 800 ? "center" : null,
              position: "relative",
              left: viewPort < 800 ? 0 : 90,
              top: viewPort < 800 ? 100 : 120,
              fontSize: viewPort < 800 ? "18vw" : "5vw",
              fontWeight: "bold",
              color: "rgb(0,255,255,0%)",
              WebkitTextStroke: "0.5px white",
              backgroundImage: `url(${background})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              transition: "color 0.50s, left 0.50s, -webkit-text-stroke 0.50s",
              "&: hover": {
                color: "rgb(255,255,255,50%)",
                left: viewPort < 800 ? "none" : 100,
                WebkitTextStroke: "0.5px white",
                cursor: "pointer",
                userSelect: "none",
              },
            }}
          >
            Full - Stack Developer
          </Typography>
        </Grid>
      </Card>
    </>
  );
};

export default Intro;

import React, { useEffect, useState } from "react";
import "./about-me.css";
import {
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Typography,
  Zoom,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Social from "./social.component";
import { StaticImage } from "gatsby-plugin-image";
import Header from "./header.component";

const AboutMe = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <Paper className="section">
      <Header />
      <StaticImage
        className="about-me-image"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="overlay"></div>
      <Container className="container" maxWidth="md">
        <Grid2
          className="content"
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid2 item sm={8}>
              <Typography component="h1" variant="h3">
                Hi, my name is Steven. I am a Software Engineer
              </Typography>
              <Typography variant="h5">
                I build websites, web application and responsive websites
              </Typography>
              <Box my={5}>
                <Button variant="outlined">Get in Touch!</Button>
              </Box>
            </Grid2>
          </Zoom>
          <Hidden smDown={true}>
            <Grid2 item>
              <Social direction="column" />
            </Grid2>
          </Hidden>
        </Grid2>
      </Container>
    </Paper>
  );
};

export default AboutMe;

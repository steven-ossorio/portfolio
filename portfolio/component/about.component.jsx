import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Typography,
  Zoom,
  Grid,
  Fade,
  Divider,
} from "@mui/material";
import Social from "./social.component";

const AboutMe = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <Paper className="section" id="about">
      <div className="overlay"></div>
      <Container className="container" maxWidth="md">
        <Grid
          className="content"
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="div" variant="h4">
                About me
              </Typography>
              <Divider
                sx={{
                  color: "red",
                  width: "50%",
                  borderBottomWidth: "3px",
                  backgroundColor: "red",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              />
              <Typography component="div" variant="h6">
                Hi, my name is Steven. I am Software Engineer who loves to
                transform ideas into reality using code. With over three years
                of developing web applications using the latest front-end and
                UI/UX technologies and full-fledged APIs. Motivated designer and
                developer with experience creating custom websites with ReactJs,
                Node, Express, Mongo, and PostgreSQL.
              </Typography>
            </Grid>
          </Zoom>
          {/* <Hidden smDown={true}>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden> */}
        </Grid>
      </Container>
    </Paper>
  );
};

export default AboutMe;
